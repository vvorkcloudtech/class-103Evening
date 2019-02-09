import React from 'react';
import MenuBar from './Menubar';
import Footer from './Footer';
import LikeCounter from './LikeCounter';
// import fire from '../../config/Fire';
import { Container, Row, Col } from 'reactstrap';
// import Profile_Blog from './Profile_Blogs';

class Profile_Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.logout = this.logout.bind(this);
    // }


    // logout() {
    //     fire.auth().signOut();
    // }
    render() {
        return (
            <div className="main">
                <MenuBar />
                <img className="cover_img" src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Cover" />
                <Container fluid>

                    <Row style={{ background: '#fff'}}>
                        <Col sm="6">
                            <img className="profile-img" src="http://1.bp.blogspot.com/-cESFuswvRgY/UXT0ItTjcnI/AAAAAAAAi3s/mgkiR6wkomA/s1600/Hannah-Butt-Stunning-Pakistani-Girl.jpg" alt="profile" />
                            <span className="profile-name">Lili Kalifs</span>
                        </Col>
                        <Col sm="6" >
                            <div className="profile-about">
                                <h2>
                                    92<br />
                                    <span style={{ fontSize: '18px' }}>Post</span>
                                </h2>
                                <h2>
                                    302<br />
                                    <span style={{ fontSize: '18px' }}>Likes</span>
                                </h2>
                                <h2>
                                    430<br />
                                    <span style={{ fontSize: '18px' }}>Comments</span>
                                </h2>
                                <h2>
                                <span className="LogOut"  data-toggle="tooltip" data-placement="bottom" title="LogOut"> <i class="fas fa-sign-out-alt"></i></span>
                                </h2>

                            </div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md="4" className="info-area">
                            <ul className="profile-info">
                                <li><i class="fas fa-info-circle"></i>&nbsp;&nbsp;Personal Info</li>
                                <li><i class="far fa-envelope"></i>&nbsp;&nbsp;&nbsp;Personal Info</li>
                                <li><i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;Personal Info</li>
                                <li><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;&nbsp;Personal Info</li>
                                <li><i class="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;Verified</li>
                            </ul>
                        </Col>

                        <Col md="8" className="blog-area">
                            <img src="../img/me.png" width="70px" height="70px" alt="User" /><span style={{ fontSize: '20px', fontWeight: '600' }}>&nbsp;&nbsp;Talha Mughal</span>
                            <br /><br />
                            <img src="../img/carasoul.JPG" width="100%" alt="" />
                            <br /><br />
                            <p style={{ padding: "0px 10px", textAlign: "justify", color: "grey" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                            {/* <Profile_Blog/> */}
                            <LikeCounter />
                            <br/><br/>
                        </Col>
                    </Row>
                </Container>
                <br /><br />
                <Footer />
            </div>
        );

    }

}

export default Profile_Home;
