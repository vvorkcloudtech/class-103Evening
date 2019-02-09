import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
require('firebase/auth');
class SignUpForm extends Component {
    state = {
        email: '',
        password:'',
    }
    DataStore=(e)=>{
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email.trim(), this.state.password).then((response=>{
        window.location("/step2")
            console.log(response.message);
        })).catch((error)=>{
            console.log(error.message)
        })
        
    }
    EmailSet=(e)=>{
        e.preventDefault();
        this.setState({email:e.target.value})
    }
    PassSet=(e)=>{
        e.preventDefault();
        this.setState({password:e.target.value})
    }
  
    render() {
        return (
            <div className="container-fluid MainSignUp">
                <div className="row">
                    <div className="col-md-4 SignUpLeft">
                        <div className="InnerContent">
                            <h1>carrino</h1>
                            <ul className="Features">
                                <li><i className="fa fa-search"></i><span>Explore your favourite topics.</span></li>
                                <li><i className="fa fa-comments-o"></i><span>Create your own post and publish it.</span></li>
                                <li><i className="fa fa-thumbs-up"></i><span>Like, comments, and share the posts.</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8 SignUpRight">
                    <div className="InnerContent">
                        <h1>Create a new account.</h1>
                        <form autoComplete="off" className="container" onSubmit={this.DataStore}>
                            <label htmlFor="Email">Email</label>
                            <br/>
                            <input id="Email" required autoComplete="off" onChange={this.EmailSet} type="email" placeholder="Enter Your Email...."/>
                            <label htmlFor="Password">Password</label>
                            <br/>
                            <input id="Password" required autoComplete="off" type="password" onChange={this.PassSet} placeholder="Enter Your Password...."/>
                            <label htmlFor="ConfrimPassword">Confrim Password</label>
                            <br/>
                            <input id="ConfrimPassword" required autoComplete="off" type="password" placeholder="Enter Your Password Again...."/>
                            <input type="checkbox"/><span>I agree with <span>Terms&Conditions</span></span>
                            <br/>
                            <button type="submit">Sign Up</button>
                            <span><Link to='/Login' >Sign In</Link></span>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm;