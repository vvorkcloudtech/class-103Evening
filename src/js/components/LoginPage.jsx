import React, { Component } from 'react';
import $ from 'jquery';
class LoginForm extends Component {
    render() {
        return (
            <div className="container-fluid MainForm">
                <div className="row">
                    <div className="row col-md-6 Left-Content">
                        <span>C</span>
                        <div className="col-md-12">
                            <h1>Start <br /> Blogging <br />Today.</h1>
                        </div>
                        <ul className="SocialIcons">
                            <li className="fa fa-facebook"></li>
                            <li className="fa fa-instagram"></li>
                            <li className="fa fa-twitter"></li>
                            <li className="fa fa-linkedin"></li>
                        </ul>
                    </div>
                    <div className="col-md-6 Right-Content">
                        <h1 className="text-center">carrino</h1>
                        <ul className="Input">
                            <li>
                                <i className="fa fa-user"></i>
                                <input type="text" id="usernname" placeholder="      Enter Username Here..." />
                            </li>
                            <li>
                                <i className="fa fa-key"></i>
                                <input type="password" id="password" placeholder="      Enter Password Here..." />
                            </li>
                            <li>
                                <span>Create Account or <span> Forget Password?</span></span>
                            </li>
                        </ul>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm;