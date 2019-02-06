import React from "react";
import Home from './Home'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import CreatPost from './creatpost';
import Profile_Blog from "./Profile/Profile_Blog";
import SignUp from './SignUpForm';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/creatpost" component={CreatPost} />

        <Route exact path="/Profile_Blog" component={Profile_Blog} />





      </div>
    );
  }
}
export default App;
