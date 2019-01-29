import React from "react";

class Post extends React.Component{
    render(){
        return(
            <div>
                
  <div class="small-container">
    <h1>New Tab App</h1>
<br/>
    <form>
      <input id="item" type="text" placeholder="Add a Post..."/>
    </form>
<br/>
    <h2>Items</h2>
    <ol></ol>

    <button>Clear All</button>
  </div>
            </div>
        )
    }
}

export default Post;