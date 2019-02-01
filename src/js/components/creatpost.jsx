import React from "react";

class CreatPost extends React.Component{
    render(){
        return(
            <div>
                  <div className="container-fluid">
        <div className="row">
            <div className="col-md-4" id="left-side">
                <p id="c">C</p>
                <h1 id="logo">carrino</h1>
                <br/><br/><br/>
                <ul>
                    <li><i className="fas fa-search">&nbsp;</i>Explorer your favourite topic.</li>
                    <br/>
                    <li><i className="fas fa-comments">&nbsp;</i>Creat your own post and publish.</li>
                    <br/>
                    <li><i className="far fa-thumbs-up">&nbsp;</i>Like, Comment and share the post.</li>
                </ul>
                
            <br/><br/><br/>
            </div>

            <div className="col-md-8" id="right-side">
                <div className="container-fluid">
                        <h1 id="creat">Creat a Post</h1>
                    <div className="col-md-12 col-md-offset-1">
                    <form name="formPractice">
                        {/* <!--For title--> */}
                        <h3 id="heading">Title</h3>
                        <input id="title" type="text" name="title" placeholder="Enter the Title here..."/>
                        {/* <!-- <input id="para" type="text" name="paragraph" placeholder="Add a post..."/> --> */}
                        <br/><br/><br/>
                    </form>
                    <h3 id="heading">Content</h3>

                    <div id="editor">
                        {/* <!--this is the editor area--> */}
                        <div id="edit">
                        </div>
                        <br/><br/><br/>
                        <input type="button" id="submit" value="Submit."/>
                        <input type="reset" id="clear" name="clear" value="Clear."/>
                       
                        {/* <!--br tags for height--> */}
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <br/><br/><br/>
                        <br/><br/><br/><br/>
                    </div>

                </div>
                </div>
            </div>
        </div>
        
        <div id="output">

        </div>

    </div>



  
            </div>
        )
    }
}

export default CreatPost;