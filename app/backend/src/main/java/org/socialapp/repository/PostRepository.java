package org.socialapp.repository;

import org.socialapp.model.Entity.PostEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<PostEntity, Long> {

    PostEntity findByUser_id(UserEntity user);

}
