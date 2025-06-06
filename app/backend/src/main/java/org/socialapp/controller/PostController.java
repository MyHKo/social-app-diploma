package org.socialapp.controller;

import org.socialapp.Service.PostService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public List<PostEntity> getPostsByUser_id(@PathVariable String id) {
        System.out.println(id);
        UserEntity user = userService.getUserByUsername(id);
        return postService.getPostsByUser(user);
    }

    @GetMapping("/get-newest")
    public List<PostEntity> getNewestPosts() {
        return postService.getTenNewestPosts();
    }
}
