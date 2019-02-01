import React from "react";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import Welcome from './welcome';
import CreatPost from './creatpost';

import { Route, Switch, Redirect } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/creatpost" component={CreatPost}/>
      </div>
    );
  }
}
export default App;
