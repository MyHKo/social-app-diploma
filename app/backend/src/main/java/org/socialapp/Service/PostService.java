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

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<PostEntity> getPostsByUser(UserEntity user) {
        return postRepository.findAllByUser(user);
    }

    public PostEntity createPost(PostEntity post) {
        return postRepository.save(post);
    }

    public void deletePost(PostEntity post) {
        postRepository.delete(post);
    }

    public List<PostEntity> getTenNewestPosts() {
        Pageable topTen = PageRequest.of(0, 10, Sort.by("created_at").descending());
        return postRepository.findAllByOrderByCreatedAtDesc(topTen).getContent();
    }
}
