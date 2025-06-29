package org.socialapp.controller;

import org.socialapp.DTO.FollowDTO;
import org.socialapp.Service.PostService;
import org.socialapp.Service.SubscriptionService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.SubscriptionEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionService subscriptionService;

    @Autowired
    private PostService postService;

    @GetMapping("/stats/{username}")
    public ResponseEntity<Map<String,Object>> getUserById(@PathVariable("username") String username) {
        Map<String,Object> response = new HashMap<>();
        Optional<UserEntity> user = userService.getUserByUsername(username);

        if(user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        int numberOfSubscribers = subscriptionService.countSubscribers(user.get());
        int numberOfSubscribings = subscriptionService.countSubscribings(user.get());
        int numberOfPosts = postService.countPostsByUser(user.get());
        response.put("numberOfFollowers", numberOfSubscribers);
        response.put("numberOfPosts", numberOfPosts);
        response.put("numberOfFollows", numberOfSubscribings);
        response.put("user", user.get());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/posts/{username}")
    public ResponseEntity<Map<String,Object>> getPostsByUsername(@PathVariable("username") String username) {
        Map<String,Object> response = new HashMap<>();
        Optional<UserEntity> user = userService.getUserByUsername(username);
        if(user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        List<PostEntity> posts = postService.getTenNewestPostsByUser(user.get());
        response.put("posts", posts);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/follow")
    public ResponseEntity<?> followUser(@RequestBody FollowDTO body) {
        Optional<UserEntity> subscriber = userService.getUserByUsername(body.getSubscriber());
        Optional<UserEntity> subscribee = userService.getUserByUsername(body.getSubscribee());
        System.out.println("REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG");
        System.out.println(subscriber.get().getId());
        System.out.println(subscribee.get().getId());
        System.out.println("REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG REQUEST LOG");
        SubscriptionEntity subscription = new SubscriptionEntity(subscriber.get(), subscribee.get());
        subscriptionService.createSubscription(subscription);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/isfollowing")
    public ResponseEntity<?> getUserIsFollowing(@RequestBody FollowDTO body) {
        Optional<UserEntity> subscriber = userService.getUserByUsername(body.getSubscriber());
        Optional<UserEntity> subscribee = userService.getUserByUsername(body.getSubscribee());
        Optional<SubscriptionEntity> subscription = subscriptionService.findByUsers(subscriber.get(), subscribee.get());
        if(subscription.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(true);
        }
    }

    @PostMapping("/unfollow")
    public ResponseEntity<?> unFollowUser(@RequestBody FollowDTO body) {
        Optional<UserEntity> subscriber = userService.getUserByUsername(body.getSubscriber());
        Optional<UserEntity> subscribee = userService.getUserByUsername(body.getSubscribee());
        SubscriptionEntity subscription = new SubscriptionEntity(subscriber.get(), subscribee.get());
        subscriptionService.deleteSubscription(subscription);
        return ResponseEntity.ok().build();
    }

}
