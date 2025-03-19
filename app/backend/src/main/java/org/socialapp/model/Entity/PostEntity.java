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

    @Column(nullable = false)
    @NotBlank(message = "Date cannot be empty")
    private OffsetDateTime created_at;


    public PostEntity() {}

    public PostEntity(UserEntity user, String title, String body, OffsetDateTime created_at) {
        this.user = user;
        this.title = title;
        this.body = body;
        this.created_at = created_at;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public UserEntity getUser_id() { return user; }
    public void setUser_id(UserEntity user_id) { this.user = user_id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }

    public OffsetDateTime getCreated_at() { return created_at; }
    public void setCreated_at(OffsetDateTime created_at) { this.created_at = created_at; }
}
