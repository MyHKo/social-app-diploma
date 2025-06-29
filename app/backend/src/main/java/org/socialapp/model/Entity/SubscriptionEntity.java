package org.socialapp.model.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import org.socialapp.model.Entity.IdClass.SubscriptionId;

import java.time.OffsetDateTime;

@Entity
@Table(name = "subscriptions")
public class SubscriptionEntity {

    @EmbeddedId
    private SubscriptionId id;

    @ManyToOne
    @MapsId("subscriberId")
    @JoinColumn(name = "subscriber_id", nullable = false)
    private UserEntity subscriber;

    @ManyToOne
    @MapsId("subscribeeId")
    @JoinColumn(name = "subscribee_id", nullable = false)
    private UserEntity subscribee;

    @Column(nullable = false)
    private OffsetDateTime created_at;


    public SubscriptionEntity() {}

    public SubscriptionEntity(UserEntity subscriber, UserEntity subscribee) {
        this.subscriber = subscriber;
        this.subscribee = subscribee;
        this.id = new SubscriptionId(subscriber.getId(), subscribee.getId());
    }

    public SubscriptionId getId() {
        return id;
    }

    public UserEntity getSubscriber() { return subscriber; }

    public UserEntity getSubscribee() { return subscribee; }

    public OffsetDateTime getCreated_at() { return created_at; }
}
