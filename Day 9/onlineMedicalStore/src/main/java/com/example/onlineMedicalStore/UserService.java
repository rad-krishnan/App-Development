package com.example.onlineMedicalStore;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public ResponseEntity<?> registerUser(User newUser) {
        if (newUser.getPassword().equals(newUser.getConfirmPassword())) {
            String encryptedPassword = passwordEncoder.encode(newUser.getPassword());
            newUser.setPassword(encryptedPassword);

            // Set confirmPassword as null because we don't want to persist confirmPassword
            newUser.setConfirmPassword(null);

            userRepository.save(newUser);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Password and confirm password do not match.", HttpStatus.BAD_REQUEST);
        }
    }
}


