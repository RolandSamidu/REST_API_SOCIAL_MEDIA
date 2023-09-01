package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long user_id;

  @Column(name = "username")
  private String username;

  @Column(name = "email")
  private String email;

  @Column(name = "bio")
  private String bio;

  @Column(name = "password")
  private String password;

  @Column(name = "image")
  private String image;

  public User() {

  }

  public User(String username, String email, String bio, String password, String image) {
    super();
    this.username = username;
    this.email = email;
    this.bio = bio;
    this.password = password;
    this.image = image;
  }

  public long getUser_Id() {
    return user_id;
  }

  public void setUser_Id(long user_id) {
    this.user_id = user_id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getBio() {
    return bio;
  }

  public void setBio(String bio) {
    this.bio = bio;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

}
