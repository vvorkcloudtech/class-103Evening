  import React from "react";
//   first of all import the like counter component in your component as shown below and use the the give instruction to //  use it accordingly
  import Counter from './LikeCounter';


   {/** 
        provide the no of likes dis likes in the state as shown below and 
        copy the the rest of state keys as it is and paste it in your component's state 
        copy the other two method exactly and paste them in your component 
 */}

  class LikeUsage extends React.Component{
    state={
        noOfLikes:29,
        noOfDisLikes:19,
        isLiked: false,
        isDisLiked:false
      }
      
      incrementCount = ()=>{
        this.state.isLiked?this.setState({noOfLikes:(this.state.noOfLikes-1), isLiked:false}):this.setState({noOfLikes:(this.state.noOfLikes+1), isLiked:true})
        
      }
    
      decrementCount = ()=>{
        this.state.isDisLiked?this.setState({noOfDisLikes:(this.state.noOfDisLikes-1), isDisLiked:false}):this.setState({noOfDisLikes:(this.state.noOfDisLikes+1), isDisLiked:true})
      }


      render(){
          return(  

            // use the below tag in your component as it's where you want to use it
          <Counter noOfLikes = {this.state.noOfLikes} noOfDisLikes={this.state.noOfDisLikes }  incrementCounter = {this.incrementCount} decrementCounter = {this.decrementCount}  isLiked ={this.state.isLiked} isDisLiked={this.state.isDisLiked} />)
      }
  }


  export default LikeUsage;