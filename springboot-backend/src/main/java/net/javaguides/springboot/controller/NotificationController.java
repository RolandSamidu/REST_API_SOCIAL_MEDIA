package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Notification;
import net.javaguides.springboot.repository.NotificationRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/p1/n1")
public class NotificationController{

    @Autowired
    private NotificationRepository notificationRepository;

    //get all notification
    @GetMapping("/notification")
    public List<Notification> getAllNotification(){
        return notificationRepository.findAll();
    }

    // create notification rest api
    @PostMapping("/notification")
    public Notification createNotification(@RequestBody Notification notification){
        return notificationRepository.save(notification);
    }

    // get notification by id rest api
    @GetMapping("/notification/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable Long id) {
        Notification notification = notificationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notification not exist with id :" + id));
        return ResponseEntity.ok(notification);
    }

    // update notification rest api
    @PutMapping("/notification/{id}")
    public ResponseEntity<Notification> updateNotification(@PathVariable Long id, @RequestBody Notification notificationDetails) {
        Notification notification = notificationRepository.findById(id)
                          .orElseThrow(() -> new ResourceNotFoundException("Notifiication not exist with id :" + id));

                notification.setUser_Id(notificationDetails.getUser_Id());
                notification.setNotification(notificationDetails.getNotification());
                notification.setTimestamp(notificationDetails.getTimestamp());
                notification.setMarkRead(notificationDetails.getMarkRead());
                
                Notification updateNotification = notificationRepository.save(notification);
                return ResponseEntity.ok(updateNotification);
    }

    // delete notification rest api
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteNotification(@PathVariable Long id){
		Notification notification = notificationRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Notification not exist with id :" + id));
		
		notificationRepository.delete(notification);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}