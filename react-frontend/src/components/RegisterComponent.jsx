import React, { Component } from 'react'

export default class RegisterComponent extends Component {
    render() {
        return (
            <div>
                <nav class="navbar bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand text-white">Foodie Application</a>
                        <form class="d-flex" role="sign-up">
                        <a href='/login'><button class="btn btn-sm btn-outline-success" type="button" href="/login">SIGN IN</button></a>
                        </form>
                    </div>
                </nav>
                <div class="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content rounded-4 shadow">
                            <div class="modal-header p-5 pb-4 border-bottom-0">
                                <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
                            </div>

                            <div class="modal-body p-3 pt-0">
                                <form class="">
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="username" />
                                        <label for="floatingInput">Username</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="bio" />
                                        <label for="floatingInput">Bio</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <label for="floatingInput" className='fs-6 mb-2'>Profile Image</label>
                                    <div class="form-floating mb-3">
                                        <input type="file" class="form-control form-control-sm" id="formFileSm" />
                                    </div>
                                    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">Sign up</button>
                                    <small class="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                                    <hr class="my-4" />
                                    <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                    <button class="w-100 py-2 mb-2 btn btn-outline-success rounded-3" type="submit">
                                    <i class="fa-brands fa-google mr-2"></i>
                                        Sign up with Google
                                    </button>
                                    <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
                                    <i class="fa-brands fa-github mr-2"></i>
                                        Sign up with GitHub
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
