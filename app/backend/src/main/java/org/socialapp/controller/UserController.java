package org.socialapp.controller;

import org.socialapp.Service.SubscriptionService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.SubscriptionEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionService subscriptionService;

    @GetMapping
    public List<UserEntity> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public UserEntity getUserById(@PathVariable("username") String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping("/{username}/subscriptions")
    public List<SubscriptionEntity> getUserSubscriptions(@PathVariable("username") String username) {
        UserEntity user = userService.getUserByUsername(username);
        return subscriptionService.getAllSubscriptions(user);
    }
}
