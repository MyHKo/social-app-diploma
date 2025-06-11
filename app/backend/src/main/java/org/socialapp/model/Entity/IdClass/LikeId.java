package org.socialapp.model.Entity.IdClass;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LikeId implements Serializable {
    private Integer userId;

    private Integer postId;

    public LikeId() {}

    public LikeId(Integer userId, Integer PostId) {
        this.userId = userId;
        this.postId = PostId;
    }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }

    public Integer getPostId() { return postId; }
    public void setPostId(Integer PostId) { this.postId = PostId; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LikeId that = (LikeId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(postId, that.postId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, postId);
    }
}
