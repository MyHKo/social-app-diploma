package org.socialapp.Service;

import org.socialapp.model.Entity.PostEntity;
import org.socialapp.repository.LikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;

    public int countLikesByPost(PostEntity post) {
        return likeRepository.countAllByPost(post);
    }

}
