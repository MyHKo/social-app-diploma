package org.socialapp.controller;

import org.socialapp.Service.PostService;
import org.socialapp.Service.SubscriptionService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

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
}
