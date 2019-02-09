import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuBar extends Component {
  constructor(props){
    super(props);
    // console.log(window.location.pathname)
  }
  render() {
    const Liz = <li key={window.location.pathname}><Link to="/Login">Login</Link></li>;
    const Liz2 = <li key={window.location.pathname+'1'}><Link to="signup">Sign Up</Link></li>;
    // const UserName = ;
    return (
            <nav className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-brand-centered">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="navbar-brand navbar-brand-centered">carrino</div>
              </div>
              <div className="collapse navbar-collapse" id="navbar-brand-centered">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="">Categories</Link></li>
                  <li><Link to="">Blog</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="">About</Link></li>
                  <li><Link to="#">|</Link></li>		        
                  {(()=>{
                    if(this.props.proper.authenticated){
                      return <li><Link to="/profile">{this.props.proper.currentUser.displayName}</Link></li>;
                    }
                    else{
                      return [Liz, Liz2] ;
                    }
                  })()}	        
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default MenuBar;