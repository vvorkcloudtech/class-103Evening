import React from "react";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginPage'
import Welcome from './welcome';
import CreatPost from './creatpost';
import LikeUsage from './likeUses'
import Counter from './LikeCounter'

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
        {/* <Counter noOfLikes = {this.state.noOfLikes} noOfDisLikes={this.state.noOfDisLikes }  incrementCounter = {this.incrementCount} decrementCounter = {this.decrementCount}  isLiked ={this.state.isLiked} isDisLiked={this.state.isDisLiked} /> */}
        <LikeUsage/>
      </div>
    );
  }
}
export default App;
