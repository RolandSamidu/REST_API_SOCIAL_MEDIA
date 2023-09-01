package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Comment;
import net.javaguides.springboot.repository.CommentRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/p1/c1")
public class CommentController {
    
    @Autowired
    private CommentRepository commentRepository;

    //get all comments
    @GetMapping("/comments")
    public List<Comment> getAllCommets(){
        return commentRepository.findAll();
    }

    // create comment rest api
    @PostMapping("/comments")
    public Comment createComment(@RequestBody Comment comment) {
        return commentRepository.save(comment);
    }

    // get comment by id rest api
    @GetMapping("/comment/{id}")
    public ResponseEntity<Comment> getCommentById(@PathVariable Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Comment not exist with id :" + id));
        return ResponseEntity.ok(comment);
    } 

    // update comment rest api
    @PutMapping("/comment/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long id, @RequestBody Comment commentDetails) {
        Comment comment = commentRepository.findById(id)
                 .orElseThrow(() -> new ResourceNotFoundException("Comment not exist with id :" + id));
        
        comment.setUser_Id(commentDetails.getUser_Id());
        comment.setPost_Id(commentDetails.getPost_Id());
        comment.setTimestamp(commentDetails.getTimestamp());
        comment.setComment(commentDetails.getComment());

        Comment updatedComment = commentRepository.save(comment);
        return ResponseEntity.ok(updatedComment);
    }

    // delete comment rest api
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteComment(@PathVariable Long id){
		Comment comment = commentRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Comment not exist with id :" + id));
		
		commentRepository.delete(comment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
