package org.socialapp.DTO;

public class UserLogInDTO {

    private String username;
    private String password;

    public UserLogInDTO() {}

    public void setPassword(String password) {
        this.password = password;
    }
    public String getPassword() {
        return password;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public String getUsername() {
        return username;
    }
}
