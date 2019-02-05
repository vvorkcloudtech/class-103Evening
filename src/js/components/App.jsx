import React from "react";
import Home from './Home'
import { Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import CreatPost from './creatpost';
import profile from './profile';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/creatpost" component={CreatPost}/>
        <Route exact path="/profile" component={profile}/>
      </div>
    );
  }
}
export default App;
