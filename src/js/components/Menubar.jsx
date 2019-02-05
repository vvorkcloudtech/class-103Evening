import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuBar extends Component {
    render() {
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
                  <li><Link to="">Contact</Link></li>
                  <li><Link to="/Login">Login/Sign Up</Link></li>		        
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}
export default MenuBar;