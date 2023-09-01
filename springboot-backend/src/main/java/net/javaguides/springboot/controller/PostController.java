package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Post;
import net.javaguides.springboot.repository.PostRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/p1")

public class PostController {
  
  @Autowired
  private PostRepository postRepository;

  // get all posts
  @GetMapping("/posts")
  public List<Post> getAllUsers() {
    return postRepository.findAll();
  }


  // create post rest api
  @PostMapping("/posts")
  public Post createUser(@RequestBody Post post) {
    return postRepository.save(post);
  }

  // get post by id rest api
  @GetMapping("/user/{id}")
  public ResponseEntity<Post> getUserById(@PathVariable Long id) {
    Post post = postRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Post not exist with id :" + id));
    return ResponseEntity.ok(post);
  }

  // update post rest api
  @PutMapping("/post/{id}")
  public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post postDetails) {
      Post post = postRepository.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Post not exist with id :" + id));

      post.setUser_id(postDetails.getUser_id());
      post.setPath(postDetails.getPath());
      post.setTimestamp(postDetails.getTimestamp());
      // post.setLikeCount(postDetails.getLikecount());
      post.setPostTitle(postDetails.getPostTitle());

      Post updatedPost = postRepository.save(post);
      return ResponseEntity.ok(updatedPost);
  }


  // delete post rest api
  @DeleteMapping("/post/{id}")
  public ResponseEntity<Map<String, Boolean>> deletePost(@PathVariable Long id) {
      Post post = postRepository.findById(id)
          .orElseThrow(() -> new ResourceNotFoundException("Post not exist with id :" + id));

      postRepository.delete(post);
      Map<String, Boolean> response = new HashMap<>();
      response.put("deleted", Boolean.TRUE);
      return ResponseEntity.ok(response);
  }


}
