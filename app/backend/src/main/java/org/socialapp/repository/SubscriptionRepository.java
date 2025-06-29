package org.socialapp.repository;

import org.socialapp.model.Entity.SubscriptionEntity;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, Long> {

    Optional<SubscriptionEntity> findBySubscribeeAndSubscriber(UserEntity subscribee, UserEntity subscriber);

    List<SubscriptionEntity> findAllBySubscriber(UserEntity subscriber);

    int countAllBySubscribee(UserEntity subscribee);

    List<SubscriptionEntity> findAllBySubscribee(UserEntity subscribee);

    int countAllBySubscriber(UserEntity subscriber);

}
