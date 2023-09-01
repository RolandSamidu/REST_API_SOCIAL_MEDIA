import React, { Component } from 'react'

export default class MyProfile extends Component {
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
                                    <a class="nav-link text-white" href="/home">Homey</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/profile">My Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/freinds">My Friends</a>
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
                    <div className="row flex-nowrap">
                        <div className="bg-dark col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
                            <div className="bg-dark p-2">
                                <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
                                    <i class="fs-5 fa fa-quage"></i><span className="fs-4 d-none d-sm-inline">Foodie Application</span>
                                </a>
                                <ul className="nav nav-pills flex-column mt-4">
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-house" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">Homey</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-user" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">My Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-user-group" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">My Friends</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-bell" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">Notification</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-house" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">Status</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-gear" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">Setting</span>
                                        </a>
                                    </li>
                                    <li className="nav-item py-2 py-sm-0">
                                        <a href="#" className="nav-link text-white" aria-current="page">
                                            <i className="fa-5 fa-solid fa-right-from-bracket" style={{ color: "#ffffff", }}></i><span className="ml-2 fs-5 d-none d-sm-inline">Logout</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className='mt-5'>
                                    <button className='btn border-none dropdown-toggle text-white' type='button' id='triggerId' aria-expanded="false">
                                        <i className='fa fa-user'></i><span className='ms-2'>Dewantha</span>
                                    </button>
                                    <div className='dropdown-menu' aria-labelledby='triggerId'>
                                        <button className='dropdown-item' href=""></button>
                                        <button className='dropdown-item' href=""></button>
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
