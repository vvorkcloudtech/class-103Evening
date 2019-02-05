import React, { Component } from 'react';

import  { Container, Row, Col, Badge } from 'reactstrap';
import Profile_Hero from './Profile_Hero.jsx';
import Profile_Contact_Form from './Profile_Contact_Form.jsx';

class Contact extends Component{
    render() {
        return(
           <Container style={{ marginTop: '50px' }}>

            <Row md="12" style={{ marginTop: '20px' }}>
                <Col sm="3" style={{ background: 'white', height:'80%' }}>
                
                    <Profile_Hero />
                </Col>
                <div style={{ padding: '20px' }}></div>
                {/* <Col sm="1"></Col> */}
                <Col sm="8" style={{ background: 'white', height:'100%' }}>
                 <Profile_Contact_Form />
                </Col>
            </Row>
        </Container>
        )
    }
}
export default Contact;