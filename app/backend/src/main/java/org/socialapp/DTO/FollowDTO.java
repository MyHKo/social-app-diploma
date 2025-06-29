package org.socialapp.DTO;

public class FollowDTO {
    private String subscriber;
    private String subscribee;

    public FollowDTO() {}

    public void setSubscriber(String subscriber) {
        this.subscriber = subscriber;
    }
    public String getSubscriber() {
        return subscriber;
    }

    public void setSubscribee(String subscribee) {
        this.subscribee = subscribee;
    }
    public String getSubscribee() {
        return subscribee;
    }
}
