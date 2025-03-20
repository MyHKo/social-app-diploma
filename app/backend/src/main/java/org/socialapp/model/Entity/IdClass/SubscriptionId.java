package org.socialapp.model.Entity.IdClass;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class SubscriptionId implements Serializable {
    private String subscriberId;

    private String subscribeeId;

    public SubscriptionId() {}

    public SubscriptionId(String subscriberId, String subscribeeId) {
        this.subscriberId = subscriberId;
        this.subscribeeId = subscribeeId;
    }

    public String getSubscriberId() { return subscriberId; }
    public void setSubscriberId(String subscriberId) { this.subscriberId = subscriberId; }

    public String getSubscribeeId() { return subscribeeId; }
    public void setSubscribeeId(String subscribeeId) { this.subscribeeId = subscribeeId; }

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
