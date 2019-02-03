import React from "react";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import Welcome from './welcome';
import CreatPost from './creatpost';
<<<<<<< HEAD
import profile from './profile';
=======
import LikeUsage from './likeUses'
import Counter from './LikeCounter'
>>>>>>> f24d22149269a9189aeb20c6518f9c8191155a35

import { Route, Switch, Redirect } from 'react-router-dom';
class App extends React.Component {

  // state={
  //   noOfLikes:29,
  //   noOfDisLikes:19,
  //   isLiked: false,
  //   isDisLiked:false
  // }
  
  // incrementCount = ()=>{
  //   this.state.isLiked?this.setState({noOfLikes:(this.state.noOfLikes-1), isLiked:false}):this.setState({noOfLikes:(this.state.noOfLikes+1), isLiked:true})
    
  // }

  // decrementCount = ()=>{
  //   this.state.isDisLiked?this.setState({noOfDisLikes:(this.state.noOfDisLikes-1), isDisLiked:false}):this.setState({noOfDisLikes:(this.state.noOfDisLikes+1), isDisLiked:true})
  // }

  

  render() {
    return (
      <div>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/creatpost" component={CreatPost}/>
<<<<<<< HEAD
        <Route exact path="/profile" component={profile}/>
=======
        {/* <Counter noOfLikes = {this.state.noOfLikes} noOfDisLikes={this.state.noOfDisLikes }  incrementCounter = {this.incrementCount} decrementCounter = {this.decrementCount}  isLiked ={this.state.isLiked} isDisLiked={this.state.isDisLiked} /> */}
        <LikeUsage/>
>>>>>>> f24d22149269a9189aeb20c6518f9c8191155a35
      </div>
    );
  }
}
export default App;
