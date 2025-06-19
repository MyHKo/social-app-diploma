package org.socialapp.repository;

import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {

    List<PostEntity> findAllByUser(UserEntity user);
    Optional<PostEntity> findById(@NonNull Long id);
    Page<PostEntity> findAllByOrderByCreatedAtDesc(Pageable pageable);
    Page<PostEntity> findAllByUserOrderByCreatedAtDesc(Pageable pageable, UserEntity user);
    int countAllByUser(UserEntity user);

}
