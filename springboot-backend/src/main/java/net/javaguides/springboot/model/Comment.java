package net.javaguides.springboot.model;

import java.sql.Timestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "comments")
public class Comment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long comment_Id;

    @Column(name = "user_Id")
    private long user_Id;

    @Column(name = "post_Id")
    private long post_Id;

    @Column(name = "timestamp")
    private Timestamp timestamp;

    @Column(name = "comment")
    private String comment;

    public Comment() {

    }

    public Comment(long user_Id, long post_Id, Timestamp timestamp, String comment) {
        super();
        this.user_Id = user_Id;
        this.post_Id = post_Id;
        this.timestamp = timestamp;
        this.comment = comment;
    }
    public long getComment_Id() {
        return comment_Id;
    }
    public void setComment_Id(long comment_Id) {
        this.comment_Id = comment_Id;
    }
    public long getUser_Id() {
        return user_Id;
    }
    public void setUser_Id(long user_Id) {
        this.user_Id = user_Id;
    }
    public long getPost_Id() {
        return post_Id;
    }
    public void setPost_Id(long post_Id) {
        this.post_Id = post_Id;
    }
    public Timestamp getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
}
