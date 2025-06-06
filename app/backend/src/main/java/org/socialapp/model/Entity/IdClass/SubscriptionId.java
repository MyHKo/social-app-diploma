package org.socialapp.model.Entity.IdClass;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class SubscriptionId implements Serializable {
    private Integer subscriberId;

    private Integer subscribeeId;

    public SubscriptionId() {}

    public SubscriptionId(Integer subscriberId, Integer subscribeeId) {
        this.subscriberId = subscriberId;
        this.subscribeeId = subscribeeId;
    }

    public Integer getSubscriberId() { return subscriberId; }
    public void setSubscriberId(Integer subscriberId) { this.subscriberId = subscriberId; }

    public Integer getSubscribeeId() { return subscribeeId; }
    public void setSubscribeeId(Integer subscribeeId) { this.subscribeeId = subscribeeId; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SubscriptionId that = (SubscriptionId) o;
        return Objects.equals(subscriberId, that.subscriberId) &&
                Objects.equals(subscribeeId, that.subscribeeId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(subscriberId, subscribeeId);
    }
}
