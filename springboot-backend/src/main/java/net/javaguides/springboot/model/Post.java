package net.javaguides.springboot.model;

import java.sql.Timestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "posts")
public class Post {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long post_id;

    @Column(name = "user_id")
    private long user_id;

    @Column(name = "path")
    private String path;

    @Column(name = "at_Time")
    private Timestamp timestamp;

    // @Column(name = "likeCount")
    // private Number likeCount;

	@Column(name = "postTitle")
	private String postTitle;

    public Post() {

    }
    public Post(long user_id, String path, Timestamp timestamp, String postTitle){
        super();
        this.user_id = user_id;
        this.path = path;
        this.timestamp = timestamp;
        // this.likeCount = likeCount;
		this.postTitle = postTitle;
    }
    public long getPost_id() {
		return post_id;
	}
	public void setPost_id(long post_id) {
		this.post_id = post_id;
	}
    public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	// public Number getLikecount() {
	// 	return likeCount;
	// }
	// public void setLikeCount(Number likeCount) {
	// 	this.likeCount = likeCount;
	// }
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
}
