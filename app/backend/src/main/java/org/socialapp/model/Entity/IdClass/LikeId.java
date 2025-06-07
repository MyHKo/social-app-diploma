package org.socialapp.model.Entity.IdClass;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class LikeId implements Serializable {
    private Integer userId;

    private Integer PostId;

    public LikeId() {}

    public LikeId(Integer userId, Integer PostId) {
        this.userId = userId;
        this.PostId = PostId;
    }

    public Integer getUserId() { return userId; }
    public void setUserId(Integer userId) { this.userId = userId; }

    public Integer getPostId() { return PostId; }
    public void setPostId(Integer PostId) { this.PostId = PostId; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        LikeId that = (LikeId) o;
        return Objects.equals(userId, that.userId) &&
                Objects.equals(PostId, that.PostId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, PostId);
    }
}
