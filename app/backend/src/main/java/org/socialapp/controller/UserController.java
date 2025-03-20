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

    @GetMapping("/{id}")
    public UserEntity getUserById(@PathVariable("id") String id) {
        return userService.getUserByEmail(id);
    }

    @GetMapping("/{id}/subscriptions")
    public List<SubscriptionEntity> getUserSubscriptions(@PathVariable("id") String id) {
        UserEntity user = userService.getUserByEmail(id);
        return subscriptionService.getAllSubscriptions(user);
    }
}
