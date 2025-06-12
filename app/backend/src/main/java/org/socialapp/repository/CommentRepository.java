package org.socialapp.repository;

import org.socialapp.model.Entity.CommentEntity;
import org.socialapp.model.Entity.PostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long> {

    List<CommentEntity> findAllByPost(PostEntity post);

    int countAllByPost(PostEntity post);

}

