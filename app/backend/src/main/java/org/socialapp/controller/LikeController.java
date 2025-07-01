package org.socialapp.controller;

import org.socialapp.DTO.LikeDTO;
import org.socialapp.Service.CommentService;
import org.socialapp.Service.LikeService;
import org.socialapp.Service.PostService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/likes")
public class LikeController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private LikeService likeService;


    @PostMapping("/create")
    public ResponseEntity<?> createLike(@RequestBody LikeDTO req) {
        Optional<UserEntity> user = userService.getUserByUsername(req.getUsername());
        if(user.isEmpty()) {
            return ResponseEntity.ok("User not found");
        }

        Optional<PostEntity> post = postService.getPostById(req.getPostId());
        if(post.isEmpty()) {
            return ResponseEntity.ok("Post not found");
        }

        LikeEntity like = new LikeEntity(user.get(), post.get());
        likeService.createLike(like);
        return ResponseEntity.ok(likeService.countLikesByPost(post.get()));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteLike(@RequestBody LikeDTO req) {
        Optional<UserEntity> user = userService.getUserByUsername(req.getUsername());
        if(user.isEmpty()) {
            return ResponseEntity.ok("User not found");
        }

        Optional<PostEntity> post = postService.getPostById(req.getPostId());
        if(post.isEmpty()) {
            return ResponseEntity.ok("Post not found");
        }

        LikeEntity like = new LikeEntity(user.get(), post.get());
        likeService.deleteLike(like);
        return ResponseEntity.ok(likeService.countLikesByPost(post.get()));
    }

    @PostMapping("/isliking")
    public ResponseEntity<?> isLiking(@RequestBody LikeDTO req) {
        Optional<UserEntity> user = userService.getUserByUsername(req.getUsername());
        if(user.isEmpty()) {
            return ResponseEntity.ok("User not found");
        }

        Optional<PostEntity> post = postService.getPostById(req.getPostId());
        if(post.isEmpty()) {
            return ResponseEntity.ok("Post not found");
        }

        Optional<LikeEntity> like = likeService.findLikesByPostAndUser(post.get(), user.get());
        if(like.isEmpty()) {
            return ResponseEntity.ok("Like not found");
        }
        else {
            return ResponseEntity.ok().build();
        }
    }
}
