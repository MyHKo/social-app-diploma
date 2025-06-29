package org.socialapp.Service;

import org.socialapp.model.Entity.SubscriptionEntity;
import org.socialapp.model.Entity.UserEntity;
import org.socialapp.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    public Optional<SubscriptionEntity> findByUsers(UserEntity subscriber, UserEntity subscribee) {
        return subscriptionRepository.findBySubscribeeAndSubscriber(subscribee, subscriber);
    }

    public List<SubscriptionEntity> getAllSubscribers(UserEntity user) {
        return subscriptionRepository.findAllBySubscribee(user);
    }

    public List<SubscriptionEntity> getAllSubscriptions(UserEntity user) {
        return subscriptionRepository.findAllBySubscriber(user);
    }

    public int countSubscribers(UserEntity user) {
        return subscriptionRepository.countAllBySubscribee(user);
    }

    public int countSubscribings(UserEntity user) {
        return subscriptionRepository.countAllBySubscriber(user);
    }


    public SubscriptionEntity createSubscription(SubscriptionEntity subscription) {
        return subscriptionRepository.save(subscription);
    }

    public void deleteSubscription(SubscriptionEntity subscription) {
        subscriptionRepository.delete(subscription);
    }
}
