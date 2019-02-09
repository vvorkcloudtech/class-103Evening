import React from "react";
import Home from './Home'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import CreatPost from './creatpost';
import SignUp from './SignUpForm';
import Profile_Home from './Profile_home';

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
        <Route exact path="/Profile_home" component={Profile_Home} />
      </div>
    );
  }
}
export default App;
