package org.socialapp.Service;

import org.socialapp.model.Entity.UserEntity;
import org.socialapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    public void deleteUser(UserEntity User) {
        userRepository.delete(User);
    }
}
