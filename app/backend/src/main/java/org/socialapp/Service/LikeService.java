package org.socialapp.Service;

import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.socialapp.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;

    public int countLikesByPost(PostEntity post) {
        return likeRepository.countAllByPost(post);
    }

    public Optional<LikeEntity> findLikesByPostAndUser(PostEntity post, UserEntity user) {
        return likeRepository.findByPostAndUser(post, user);
    }

    public void createLike(LikeEntity like) {
        likeRepository.save(like);
    }

    public void deleteLike(LikeEntity like) {
        likeRepository.delete(like);
    }

}
