package org.socialapp.Service;

import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.socialapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentService commentService;

    @Autowired
    private LikeService likeService;

    public List<PostEntity> getPostsByUser(UserEntity user) {
        return postRepository.findAllByUser(user);
    }

    public int countPostsByUser(UserEntity user) {
        return postRepository.countAllByUser(user);
    }

    public Optional<PostEntity> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public PostEntity createPost(PostEntity post) {
        return postRepository.save(post);
    }

    public void deletePost(PostEntity post) {
        postRepository.delete(post);
    }

    public List<PostEntity> getTenNewestPosts() {
        Pageable topTenPageable = PageRequest.of(0, 10);
        List<PostEntity> topTen = postRepository.findAllByOrderByCreatedAtDesc(topTenPageable).getContent();
        for (PostEntity post : topTen) {
            post.setNumberOfComments(commentService.countCommentsByPost(post));
            post.setNumberOfLikes(likeService.countLikesByPost(post));
        }
        return topTen;
    }
}
