package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/u1")

public class UserController {

  @Autowired
  private UserRepository userRepository;

  // get all users
  @GetMapping("/users")
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  // create user rest api
  @PostMapping("/users")
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  // get user by id rest api
  @GetMapping("/user/{id}")
  public ResponseEntity<User> getUserById(@PathVariable Long id) {
    User user = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
    return ResponseEntity.ok(user);
  }

  // update user rest api
  @PutMapping("/user/{id}")
  public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
    User user = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

    user.setUsername(userDetails.getUsername());
    user.setEmail(userDetails.getEmail());
    user.setBio(userDetails.getBio());
    user.setPassword(userDetails.getPassword());
    user.setImage(userDetails.getImage());

    User updatedUser = userRepository.save(user);
    return ResponseEntity.ok(updatedUser);
  }

  // delete user rest api
  @DeleteMapping("/user/{id}")
  public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
    User user = userRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));

    userRepository.delete(user);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
  }

}
