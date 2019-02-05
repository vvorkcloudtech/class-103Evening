import React, { Component } from 'react';
import $ from 'jquery';
import { relative } from 'path';
import { Link } from 'react-router-dom';
class LoginForm extends Component {
    state={
        username:'',
        password : ''
    }
    UserIconRemove=(e)=>{
        e.preventDefault();
        this.setState({username:e.target.value})
        if(this.state.username){
            $('.fa-user').css("opacity","0");
        }
    }
    PassIconRemove=(e)=>{
        e.preventDefault();
        this.setState({password:e.target.value})
        if(!this.state.password == ''){
        $('.fa-key').css({'opacity': '0'});
        }
        if(this.state.password == ''){
        $('.fa-key').css({'opacity': '1'});
        }
        
    }
    render() {
        console.log(this.state)
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
                                <input type="text" id="email" onChange={this.UserIconRemove} placeholder="      Enter Username Here..." />
                            </li>
                            <li>
                                <i className="fa fa-key"></i>
                                <input type="password" onChange={this.PassIconRemove} id="password"  placeholder="      Enter Password Here..." />
                            </li>
                            <li>
                                <span><Link to="/Signup" >Create Account </Link>or <span> Forget Password?</span></span>
                            </li>
                        </ul>
                        <button id="btn-login" type="submit">Sign In</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm;





{/* <div class="login-container">
    <div class="col-xs-12 col-sm-4 col-sm-offset-4 login-box">
      <div class="login-header">
        <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg"/>
        <h3>Welcome</h3>
        <h5>PLEASE LOG IN</h5>
      </div>
      <div id="error-message" class="alert alert-danger"></div>
      <form onsubmit="return false;" method="post">
        <div class="form-group">
         <label for="name">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email">
        </div>
        <div class="form-group">
          <label for="name">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password">
        </div>
        <button
          type="submit"
          id="btn-login"
          class="btn btn-primary btn-block">
            Log In
        </button>
        <button
          type="button"
          id="btn-signup"
          class="btn btn-default btn-block">
            Sign Up
        </button>
        <hr>
        <button
          type="button"
          id="btn-google"
          class="btn btn-default btn-danger btn-block">
            Log In with Google
        </button>
      </form>
    </div>
  </div> */}