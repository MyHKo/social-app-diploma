package org.socialapp.model.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.OffsetDateTime;

@Entity
@Table(name = "posts")
public class PostEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id" , nullable = false)
    private UserEntity user;

    @Column(nullable = false)
    @NotBlank(message = "Title cannot be empty")
    private String title;

    @Column(nullable = false)
    @NotBlank(message = "Body cannot be empty")
    private String body;

    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private OffsetDateTime createdAt;

    @Transient
    private int numberOfComments;

    @Transient
    private int numberOfLikes;


    public PostEntity() {}

    public PostEntity(UserEntity user, String title, String body) {
        this.user = user;
        this.title = title;
        this.body = body;
    }

    public Long getId() { return id; }

    public UserEntity getUser_id() { return user; }
    public void setUser_id(UserEntity user_id) { this.user = user_id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public int getNumberOfComments() { return numberOfComments; }
    public void setNumberOfComments(int numberOfComments) { this.numberOfComments = numberOfComments; }

    public int getNumberOfLikes() { return numberOfLikes; }
    public void setNumberOfLikes(int numberOfLikes) { this.numberOfLikes = numberOfLikes; }

    public OffsetDateTime getCreated_at() { return createdAt; }
}
