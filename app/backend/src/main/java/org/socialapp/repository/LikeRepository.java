package org.socialapp.repository;

import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.model.Entity.PostEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository {

    List<LikeEntity> findAllByPostId(Optional<PostEntity> postId);

}
