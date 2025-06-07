package org.socialapp.model.Entity;

import jakarta.persistence.*;
import org.socialapp.model.Entity.IdClass.LikeId;

@Entity
@Table(name = "likes")
public class LikeEntity {

    @EmbeddedId
    private LikeId id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @ManyToOne
    @MapsId("postId")
    @JoinColumn(name = "post_id", nullable = false)
    private UserEntity post;


    public LikeEntity() {}

    public LikeEntity(UserEntity user, UserEntity post) {
        this.user = user;
        this.post = post;
    }

    public UserEntity getUser() { return user; }

    public UserEntity getPost() { return post; }
}
