package net.javaguides.springboot.model;

import java.sql.Timestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "notifications")
public class Notification {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long notification_id;

    @Column(name = "user_id")
    private long user_id;

    @Column(name = "notification")
    private String notification;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @Column(name = "markRead")
    private boolean markRead;

    public Notification() {

    }

    public Notification(long user_id, String notification, Timestamp timestamp, boolean markRead) {
        super();
        this.user_id = user_id;
        this.notification = notification;
        this.timestamp = timestamp;
        this.markRead = markRead;
    }
    public long getNotification_Id(){
        return notification_id;
    }
    public void setNotification_Id(long notification_id){
        this.notification_id = notification_id;
    }
    public long getUser_Id(){
        return user_id;
    }
    public void setUser_Id(long user_id){
        this.user_id = user_id;
    }
    public String getNotification(){
        return notification;
    }
    public void setNotification(String notification){
        this.notification = notification;
    }
    public Timestamp getTimestamp(){
        return timestamp;
    }
    public void setTimestamp(Timestamp timestamp){
        this.timestamp = timestamp;
    }
    public boolean getMarkRead(){
        return markRead;
    }
    public void setMarkRead(Boolean markRead){
        this.markRead = markRead;
    }
}
