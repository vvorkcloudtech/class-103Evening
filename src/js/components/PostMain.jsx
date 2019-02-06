import React, { Component } from 'react';
import PostsData from './Data/Post'
class PostMain extends Component {
    state = {
        PostsData: PostsData
    }
    render() {
        return (
            <div className="postmainpage container-fluid">
            <img src="/img/carasoul.JPG" className="img-responsive" alt=""/>
            <hr className="PostLine" />
                <div className="container-fluid PostPage">
                    <h1>Latest Post</h1>
                    <div className="row">
                        {console.log(this.state.PostsData[0].postDetails.ImageUrl)}
                        {this.state.PostsData.map((value, index) => {
                            console.log(value)
                            return (
                                <div key={index} className="col-md-4 Post">
                                    <img src={value.postDetails.ImageUrl} className="img-responsive" alt="" />
                                    <span>{value.postDetails.postTitle}</span>
                                    <span>By<span className="text-muted">{value.aurthorDetail.postAurthorName}</span> -OCTOBER 18, 2018</span>
                                    <p className="Post-Desc">{value.postDetails.postPreviewContent}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr className="PostLine" />
            </div>
        )
    }
}

export default PostMain;