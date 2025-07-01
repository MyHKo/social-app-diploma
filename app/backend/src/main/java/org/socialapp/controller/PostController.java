package org.socialapp.controller;

import org.socialapp.DTO.CommentDTO;
import org.socialapp.DTO.LikeDTO;
import org.socialapp.DTO.PostDTO;
import org.socialapp.Service.CommentService;
import org.socialapp.Service.LikeService;
import org.socialapp.Service.PostService;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.CommentEntity;
import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/comments/{id}")
    public ResponseEntity<Map<String,Object>> getPostComments(@PathVariable("id") String id) {
        Map<String,Object> response = new HashMap<>();
        Optional<PostEntity> post = postService.getPostById(Long.parseLong(id));
        List<CommentEntity> comments = commentService.getCommentsByPost(post.get());
        response.put("comments", comments);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/stats/{id}")
    public ResponseEntity<Map<String,Object>> getPostStats(@PathVariable("id") String id) {
        Map<String,Object> response = new HashMap<>();
        Optional<PostEntity> optionalPost = postService.getPostById(Long.parseLong(id));
        
        if(optionalPost.isPresent()) {
            response.put("post", optionalPost.get());
            return ResponseEntity.ok(response);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get-newest")
    public List<PostEntity> getNewestPosts() {
        return postService.getTenNewestPosts();
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPost(@RequestBody PostDTO req) {
        Optional<UserEntity> user = userService.getUserByUsername(req.getUsername());
        if(user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        PostEntity post = new PostEntity(user.get(), req.getTitle(), req.getText());
        postService.createPost(post);

        return ResponseEntity.ok().build();
    }

    @PostMapping("/comments/create")
    public ResponseEntity<?> createComment(@RequestBody CommentDTO req) {
        Optional<UserEntity> user = userService.getUserByUsername(req.getUsername());
        if(user.isEmpty()) {
            return ResponseEntity.ok("User not found");
        }

        Optional<PostEntity> post = postService.getPostById(req.getPostId());
        if(post.isEmpty()) {
            return ResponseEntity.ok("Post not found");
        }

        CommentEntity comment = new CommentEntity(user.get(), post.get(), req.getText());
        commentService.createComment(comment);
        return ResponseEntity.ok(commentService.getCommentsByPost(post.get()));
    }
}
