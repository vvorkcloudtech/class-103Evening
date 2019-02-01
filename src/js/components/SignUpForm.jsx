import React, { Component } from 'react';
class SignUpForm extends Component {
    DataStore=(e)=>{
        e.preventDefault();
        let UserInputs = document.querySelectorAll('input');
        let UserArray = Array.from(UserInputs);
        let StateArray = [];
        for(let i = 0; i<5; i++){
            StateArray.push(UserArray[i].value)
        }
        localStorage.setItem('UserDetail', JSON.stringify(StateArray))
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
                        <form className="container" onSubmit={this.DataStore}>
                            <label htmlFor="FullName">Full Name</label>
                            <br/>
                            <input id="FullName" type="text" placeholder="Enter Your Full Name...."/>
                            <label htmlFor="Username">Username</label>
                            <br/>
                            <input id="Username" type="text" placeholder="Enter Your Username...."/>
                            <label htmlFor="Email">Email</label>
                            <br/>
                            <input id="Email" type="email" placeholder="Enter Your Email...."/>
                            <label htmlFor="Password">Password</label>
                            <br/>
                            <input id="Password" type="password" placeholder="Enter Your Password...."/>
                            <label htmlFor="ConfrimPassword">Confrim Password</label>
                            <br/>
                            <input id="ConfrimPassword" type="text" placeholder="Enter Your Password Again...."/>
                            <input type="checkbox"/><span>I agree with <span>Terms&Conditions</span></span>
                            <br/>
                            <button type="submit">Sign Up</button>
                            <span>Sign In</span>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUpForm;