import React from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import Profile_Hero from "./Profile_Hero.jsx";
import Profile_AboutUs from './Profile_AboutUs.jsx';
// import Profile_Home from ''

export default class Example extends React.Component {
    render() {
        return (
            <Container style={{marginTop: '50px'}}>
                <Row>
                    <Col md={12}>
        
                    </Col>
                </Row>
            
                <Row md="12" style={{marginTop:'20px'}}>
                    <Col md="3" style={{background:'white', height: '80%'}}>
                       <Profile_Hero />
                    </Col>
                    <div style={{padding:'20px'}}></div>
                    {/* <Col sm="1"></Col> */}
                    <Col md="8" style={{ background: 'white', height:'100% auto'}}>
                      <Profile_AboutUs/>
                    </Col>
                </Row>
               
            </Container>
            
        );
    }
}