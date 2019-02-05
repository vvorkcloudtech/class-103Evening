import React, { Component } from 'react';

import { Container, Row, Col, Badge } from 'reactstrap';
import Profile_Hero from './Profile_Hero.jsx';
import Profile_Gallery_blog from './Profile_Gallery_blog.jsx';

class Profile_Blog extends Component{
    render () {
        return (
            <Container>
            
            <Row md="12">
                <Col sm="3" style={{ background: 'white', height: '80%'}}>
                <br/><br/><br/>
                    <Profile_Hero />
                </Col>
                {/* <Col sm="1"></Col> */}
                <Col sm="8" style={{ background: 'white', height:'100%'}}>
                
                   <Profile_Gallery_blog/>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Profile_Blog;