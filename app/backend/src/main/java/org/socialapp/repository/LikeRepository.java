package org.socialapp.repository;

import org.socialapp.model.Entity.LikeEntity;
import org.socialapp.model.Entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<LikeEntity, Long> {

    List<LikeEntity> findAllByPostId(Long postId);

}
