import React, { Component } from 'react'

export default class FoodieHome extends Component {
  render() {
    return (
      <div>

        <div className='masthead'>
          <nav className="navbar bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                {/* <img src="assets/Foodie.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" /> */}
                <h4 className='text-white'>Foodie Application</h4>
              </a>
              <form className="d-flex" role="button">
                <p className='fs-6 text-white'>Dewantha Appuhamy</p>
                <i className="ml-3 fs-4 fa-solid fa-circle-user" style={{ color: "#ffffff", }}></i>
              </form>
            </div>
            <div className="container-fluid justify-content-center">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Homey</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">My Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">My Friends</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Notification</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">Status</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
          <div className="row flex-nowrap mt-5">
            <div className="bg-dark col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
              <div className="bg-dark p-2">
                <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
                  <i class="fs-5 fa fa-quage"></i><span className="fs-4 d-none d-sm-inline" style={{ color: "#ffffff", }}>Suggest Friends for You</span>
                </a>

              </div>
              <div className='dropdown open p-3'>
                <button className='btn border-none dropdown-toggle text-white' type='button' id='triggerId' aria-expanded="false">
                  <i className='fa fa-user'></i><span className='ms-2'>Dewantha</span>
                </button>
                <div className='dropdown-menu' aria-labelledby='triggerId'>
                  <button className='dropdown-item' href=""></button>
                  <button className='dropdown-item' href=""></button>
                </div>
              </div>
            </div>
            <div>

              {/* Create Add Post Part */}
              <div className='d-block py-5 col-6 ml-5'>
                <form >
                  <div class="form-group" >
                    <label for="postTitle">User ID</label>
                    <input type="text" class="form-control w-100 " id="postTitle" placeholder="Enter post title" />
                  </div>
                  <div class="form-group">
                    <label for="postImage">Post Image</label>
                    <div class="custom-file">
                      <input class="form-control" type="file" id="formFile" />
                    </div>
                  </div>
                  <div class="form-group" >
                    <label for="postTitle">Post Title</label>
                    <input type="text" class="form-control w-100 " id="postTitle" placeholder="Enter post title" />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>


              {/* View Post Part */}
              <div className="card mt-3 ml-5" style={{ width: 700 }}>
                <img src="assets/posts/post1.jpg" class="card-img-top" alt="post1" height="500" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link"><i class="fa-solid fa-heart fs-4" style={{ color: "#e10505" }}></i></a>
                  <a href="#" class="card-link"><i class="fa-solid fa-comment fs-4"></i></a>
                  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-comment fs-4"></i></button>
                </div>
              </div>

              <div className="card mt-3 ml-5" style={{ width: 700 }}>
                <img src="assets/posts/post3.jpg" class="card-img-top" alt="post1" height="500" />
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-body">
                  <a href="#" class="card-link"><i class="fa-solid fa-heart fs-4" style={{ color: "#e10505" }}></i></a>
                  <a href="#" class="card-link"><i class="fa-solid fa-comment fs-4"></i></a>
                  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-comment fs-4"></i></button>

                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="mb-3">
                              <label for="recipient-name" class="col-form-label">Recipient:</label>
                              <input type="text" class="form-control" id="recipient-name" />
                            </div>
                            <div class="mb-3">
                              <label for="message-text" class="col-form-label">Message:</label>
                              <textarea class="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
