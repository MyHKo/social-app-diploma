package org.socialapp.DTO;

public class PostDTO {
    private String username;
    private String title;
    private String text;

    public PostDTO() {}

    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public String getTitle() {
        return title;
    }

    public void setText(String text) {
        this.text = text;
    }
    public String getText() {
        return text;
    }

}
