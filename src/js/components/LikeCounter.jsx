import React, { Component } from 'react'



const Counter = (votes) => {
  
    // state={
    //   vote:0
    // }

    var likes = votes.noOfLikes;
    var dislikes = votes.noOfDisLikes;
    var isLiked = votes.isLiked;
    var isDisLiked = votes.isDisLiked;

    

    var likeIncrement = isDisLiked?null: votes.incrementCounter;
    var likeDicrement = isLiked? null :votes.decrementCounter; 

    var averageVots=(a, b)=>{
      console.log(a, b)
      console.log(a-b);
      var Avots = a-b;
      return  Avots
    }

  
    return (
      <div className="counter">
        <div className="innerCounter">
          {/* <p>Likes: {averageVots(likes, dislikes)}</p> */}
          <div title="Like" className="likeCounter BtnLike" onClick={likeIncrement} >
            <i className={isLiked?"fa fa-thumbs-up checked":"fa fa-thumbs-up"  } ></i>
            <span>{likes}</span>
          </div>
          <div title="dislike" className="likeCouner btnDisLike" onClick={likeDicrement} >
            <i className={isDisLiked?"fa fa-thumbs-down checked":"fa fa-thumbs-down"} ></i>
            <span>{dislikes}</span>
          </div>
        </div>
      </div>
    );
}

export default Counter;