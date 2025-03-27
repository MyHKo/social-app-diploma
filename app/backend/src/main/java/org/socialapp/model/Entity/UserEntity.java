package org.socialapp.model.Entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotBlank(message = "Name cannot be empty")
    @Size(min = 2,message = "Name cannot be shorter than 2 characters")
    private String name;

    @Column(nullable = false)
    @NotBlank(message = "Surname cannot be empty")
    @Size(min = 2,message = "Surname cannot be shorter than 2 characters")
    private String surname;

    @Column(nullable = false)
    @NotBlank(message = "Username cannot be empty")
    @Pattern(regexp = "^[A-Za-z0-9_]{3,10}$\n",
            message = "Username contains illegal characters")
    private String username;

    @Column(nullable = false)
    @NotBlank(message = "Password cannot be empty")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$\n",
            message = "Password does not meet the requirements")
    private String password;

    public UserEntity() {}

    public UserEntity(String name, String surname, String email, String username, String password) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
    }

    public Long getId() { return id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getSurname() { return surname; }
    public void setSurname(String surname) { this.surname = surname; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
