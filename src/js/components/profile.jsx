import React from 'react';
import $ from 'jquery';

class Profile extends React.Component {
    render() {
        return (
            <div>
                    
                <div className="container-fluid profile-body">
                    <div className="row">
                        {/* <!---frist row--> */}
                        <div className="col-md-12 coverbg">
                            <div className="dot"> <i className="fas fa-camera"></i> </div>
                        </div>
                    </div>

                    <div className="row">
                        {/* <!--2nd row--> */}
                        <div className="col-md-3 name-data">
                            <h1 className="profile-name">Talha mughal</h1>
                            <h4 className="name-description">This is short about us.</h4>
                            <br />
                        </div>
                        <div className="col-md-7">
                            <br />
                            <ul className="status">
                                <li><span className="num">5</span><br />Post</li>
                                <li><span className="num">12</span><br />Likes</li>
                                <li><span className="num">106</span><br />comments</li>
                                <li><span className="num">20</span><br />favourates</li>
                            </ul>
                        </div>
                        <br /><br />
                    </div>
                    {/* <!--3rd row--> */}
                     </div>
                    {/* <!--end of frist container--> */}
                    <div className="container-fluid profile-body">
                        <div className="row">
                            {/* <!--4th row--> */}
                            <div className="col-md-3  col-md-offset-1 about">
                                <div className="about-area">
                                    <div className="panel panel about-data">
                                        <div className="panel-heading">
                                            <h3 className="about-me-h3">About me</h3>
                                        </div>
                                        <div className="panel-body">
                                            <ul>
                                                <li>Email:</li>
                                                <li>talhaaslam86@yahoo.com</li>
                                                <li>language:</li>
                                                <li>English (UK)</li>
                                                <li>Followers:</li>
                                                <li>data here....</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <br /><br /><br /><br />
                            </div>
                            <div className="col-md-7 creat">
                                <div className="panel panel post creat-heading">
                                    <div className="panel-heading">Creat Post</div>
                                    <input className="panel-body" type="button" name="" value="What's on your mind, User?"
                                        placeholder="add A post..." />
                                </div>
                                {/* <!--End of inner pannel--> */}
                                <div className="panel panel-default upload">
                                    <div className="panel-body">
                                        Posts will start here...
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        </div>
                        <br/><br/><br/><br/><br/>
                    </div>
                    {/* <!--Container-fluid--> */}
                
                </div>
                )
            }
        }
        
export default Profile;