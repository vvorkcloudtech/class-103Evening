import React from "react";
import Home from './Home'
import { Route, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import Step2 from './SignUpFormStep2';
// import TestPost from './TESTPOST'
import LoginForm from './LoginPage'
import CreatPost from './creatpost';
import Profile from './profile';
import config from './firebase'
import NavBar from './Menubar';
import Footer from './Footer';
import firebase from 'firebase/app';
import TestPost from "./TESTPOST";
import ImageFileUploader from './Imageuploader';
require('firebase/auth');
require('firebase/database');
class App extends React.Component {
  state = {
    authenticated: false,
    currentUser: null,
    loading: false,
    Email: '',
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let email = user.email;
        this.setState({
          authenticated: true,
          username: user.displayName,
          currentUser: user,
          DpUrl : user.photoURL,
          loading: false,
          Email: email
        });

      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Route path='' render={() => { return <NavBar proper={this.state} key={this.props.history}/> }} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={() => { return this.state.authenticated === false ? (<LoginForm />) : (<Redirect to='/profile' />) }} />
        <Route exact path="/signup" render={() => { return this.state.authenticated === true ? (<Redirect to="step2" />) : (<SignUpForm />) }} />
        <Route exact path="/CreatePost" component={CreatPost} />
        <Route exact path="/profile" render={() => { return this.state.authenticated === false ? (<Redirect to="/login" />) : (<Profile post={this.state} />) }} />
        {/* <Route exact path="/step2" render={() => { return this.state.authenticated === true && this.state.currentUser.displayName != null && this.state.currentUser != '' ? (<Redirect to="/profile" />) : (<Step2 />) }} /> */}
        <Route exact path="/step2"  render={()=>{ return <Step2 properties={this.state} />}} />/>
      </div>

    );
  }
}
export default App;
