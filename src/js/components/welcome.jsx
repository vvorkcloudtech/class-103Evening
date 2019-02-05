import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component{
    constructor(props){
        super(props);
      }
    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">sign</Link>
                <Link to="/creatpost">Creat Post</Link>
                <Link to="/profile">Profile</Link>
            </div>
        )
    }
}
export default Welcome;