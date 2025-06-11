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
    private PostEntity post;


    public LikeEntity() {}

    public LikeEntity(UserEntity user, PostEntity post) {
        this.user = user;
        this.post = post;
    }

    public UserEntity getUser() { return user; }

    public PostEntity getPost() { return post; }
}
