import React from "react";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import Welcome from './welcome';
import CreatPost from './creatpost';

// import Profile_Home from "./Profile/Profile_Home";
import Profile_Blog from "./Profile/Profile_Blog";
// import Profile_ContactUs from './Profile/Profile_ContactUs';

import { Route, Switch, Redirect } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/creatpost" component={CreatPost}/>
{/*         
        <Route exact path="/" component={Profile_Home} /> */}
        <Route exact path = "/Profile_Blog" component={Profile_Blog}/>
        {/* <Route exact path="/Profile_Home" component={Profile_Home}/> */}
                {/* <Route exact path="/Profile_ContactUs" component={Profile_ContactUs}/> */}




         
      </div>
    );
  }
}
export default App;
