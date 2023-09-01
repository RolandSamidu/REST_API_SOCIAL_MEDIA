import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
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
                                <a class="nav-link text-white"  href="#">Homey</a>
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
        )
    }
}

export default HeaderComponent
