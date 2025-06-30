package org.socialapp.DTO;

public class CommentDTO {
    private String username;
    private Long postId;
    private String text;

    public CommentDTO() {}

    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }
    public Long getPostId() {
        return postId;
    }

    public void setText(String text) {
        this.text = text;
    }
    public String getText() {
        return text;
    }
}
