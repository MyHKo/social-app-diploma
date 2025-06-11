package org.socialapp.controller;

import org.socialapp.Service.CommentService;
import org.socialapp.Service.LikeService;
import org.socialapp.Service.PostService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.PostEntity;
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
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @Autowired
    private CommentService commentService;

    @Autowired
    private LikeService likeService;

    @GetMapping("/{id}")
    public List<PostEntity> getPostsByUser_id(@PathVariable String id) {
        System.out.println(id);
        UserEntity user = userService.getUserByUsername(id);
        return postService.getPostsByUser(user);
    }

    @GetMapping("/stats/{id}")
    public ResponseEntity<Map<String,Object>> getPostStats(@PathVariable("id") String id) {
        Map<String,Object> response = new HashMap<>();
        Optional<PostEntity> post = postService.getPostById(Long.parseLong(id));
        int numberOfLikes = likeService.getLikesByPostId(post.get().getId()).size();
        int numberOfComments = commentService.getCommentsByPost(post.get()).size();
        response.put("numberOfLikes", numberOfLikes);
        response.put("numberOfComments", numberOfComments);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/get-newest")
    public List<PostEntity> getNewestPosts() {
        return postService.getTenNewestPosts();
    }
}
