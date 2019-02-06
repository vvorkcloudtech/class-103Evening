import React, { Component } from 'react';
class NewsLetter extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="Newsletter-Main">
                    <h1>Stay in the loop</h1>
                    <p>Subscribe to the weekly newsletter for all the latest updates</p>
                    <input type="text" placeholder="Enter Email Here...." />
                    <button>SIGN UP</button>
                    <ul className="Social">
                        <li><i className="fa fa-facebook"></i><span>Facebook</span></li>
                        <li><i className="fa fa-instagram"></i><span>Instagram</span></li>
                        <li><i className="fa fa-twitter"></i><span>Twitter</span></li>
                        <li><i className="fa fa-linkedin"></i><span>LinkedIn</span></li>
                    </ul>
                </div>
                <hr className="NewsLine" />
            </div>
        )
    }
}
export default NewsLetter;