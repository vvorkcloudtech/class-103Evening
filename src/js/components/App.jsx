import React from "react";
import Home from './Home'
import { Route } from 'react-router-dom';
import Login from './LoginPage';
import SignUp from './SignUpForm';
class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={SignUp} />
      </div>
    );
  }
}
export default App;
