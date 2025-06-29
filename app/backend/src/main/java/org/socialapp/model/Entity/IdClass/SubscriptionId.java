package org.socialapp.model.Entity.IdClass;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class SubscriptionId implements Serializable {
    private Long subscriberId;

    private Long subscribeeId;

    public SubscriptionId() {}

    public SubscriptionId(Long subscriberId, Long subscribeeId) {
        this.subscriberId = subscriberId;
        this.subscribeeId = subscribeeId;
    }

    public Long getSubscriberId() { return subscriberId; }
    public void setSubscriberId(Long subscriberId) { this.subscriberId = subscriberId; }

    public Long getSubscribeeId() { return subscribeeId; }
    public void setSubscribeeId(Long subscribeeId) { this.subscribeeId = subscribeeId; }

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
