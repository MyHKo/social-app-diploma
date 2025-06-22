package org.socialapp.DTO;

import jakarta.validation.constraints.NotBlank;

public class UserDTO {
    @NotBlank
    private String name;
    @NotBlank
    private String surname;
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    @NotBlank
    private String confirmPassword;

    public UserDTO() {}

    public UserDTO(String name, String surname, String username, String password, String confirmPassword) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
