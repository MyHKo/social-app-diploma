package org.socialapp.model.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.time.OffsetDateTime;

@Entity
@Table(name = "comments")
public class CommentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id" , nullable = false)
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "post_id" , nullable = false)
    private PostEntity post;

    @Column(nullable = false)
    @NotBlank(message = "body cannot be empty")
    private String body;

    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private OffsetDateTime createdAt;

    public CommentEntity() {}

    public CommentEntity(UserEntity user, PostEntity post, String body) {
        this.user = user;
        this.post = post;
        this.body = body;
    }

    public Long getId() { return id; }

    public UserEntity getUser() { return user; }

    public PostEntity getPost() { return post; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public OffsetDateTime getCreated_at() { return createdAt; }
}
