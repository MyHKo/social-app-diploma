package org.socialapp.repository;

import org.socialapp.model.Entity.SubscriptionEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, Long> {

    List<SubscriptionEntity> findAllBySubscriber(UserEntity subscriber);

    List<SubscriptionEntity> findAllBySubscribee(UserEntity subscribee);

}
