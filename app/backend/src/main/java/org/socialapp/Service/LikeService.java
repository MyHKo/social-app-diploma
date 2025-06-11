package org.socialapp.Service;

import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;

    public List<LikeEntity> getLikesByPostId(Long postId) {
        return likeRepository.findAllByPostId(postId);
    }

}
