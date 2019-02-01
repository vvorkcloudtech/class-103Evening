import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
class Welcome extends Component{
    constructor(props){
        super(props);
      }
    render(){
        return(
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">sign</Link>
            </div>
        )
    }
}
export default Welcome;