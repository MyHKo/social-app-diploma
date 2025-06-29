package org.socialapp.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.socialapp.DTO.UserLogInDTO;
import org.socialapp.DTO.UserRegistrationDTO;
import org.socialapp.Security.JWTUtil;
import org.socialapp.Service.UserService;
import org.socialapp.model.Entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final UserService userService = new UserService();

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private PublicKey publicKey;


    public AuthController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody UserRegistrationDTO req){
        if (!req.getPassword().equals(req.getConfirmPassword())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }
        if (!req.getUsername().matches("^[A-Za-z0-9_]{3,10}$")){
            return ResponseEntity.badRequest().body("Username is invalid");
        }
        if(!req.getPassword().matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$")){
            return ResponseEntity.badRequest().body("Password does not meet the requirements");
        }

        Optional<UserEntity> checkUsername = userService.getUserByUsername(req.getUsername());

        if (checkUsername.isPresent()) {
            return ResponseEntity.badRequest().body("Username is already taken");
        }

        String hashedPassword = passwordEncoder.encode(req.getPassword());

        UserEntity user = new UserEntity(req.getName(), req.getSurname(), req.getUsername(), "", hashedPassword);
        userService.createUser(user);

        return ResponseEntity.ok().body("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody UserLogInDTO req, HttpServletResponse response){
        Optional<UserEntity> checkUsername = userService.getUserByUsername(req.getUsername());
        if(checkUsername.isEmpty()){
            return ResponseEntity.badRequest().body("Username not found");
        }
        if(!passwordEncoder.matches(req.getPassword(), checkUsername.get().getPassword())){
            return ResponseEntity.badRequest().body("Incorrect password");
        }

        Cookie cookie = new Cookie("token", jwtUtil.createToken(req.getUsername()));
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(-1);

        response.addCookie(cookie);

        Map<String,Object> responseMap = new HashMap<>();
        responseMap.put("publicKey", publicKey.toString());
        responseMap.put("username", req.getUsername());

        return ResponseEntity.ok(responseMap);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse response){
        Cookie cookie = new Cookie("token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return ResponseEntity.ok().build();
    }
}
