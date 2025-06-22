package org.socialapp.controller;

import jakarta.validation.Valid;
import org.socialapp.DTO.UserDTO;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final UserService userService = new UserService();

    public AuthController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserDTO req){
        if (!req.getPassword().equals(req.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }
        if (!req.getUsername().matches("^[A-Za-z0-9_]{3,10}$")){
            return ResponseEntity.badRequest().body("Username is invalid");
        }
        if(!req.getPassword().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$")){
            return ResponseEntity.badRequest().body("Password does not meet the requirements");
        }

        String hashedPassword = passwordEncoder.encode(req.getPassword());

        UserEntity user = new UserEntity(req.getName(), req.getSurname(), req.getUsername(), "", hashedPassword);
        userService.createUser(user);

        return ResponseEntity.ok().body("User registered successfully");
    }
}
