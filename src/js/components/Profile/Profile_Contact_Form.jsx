// import React, { Component } from 'react';
// import {Container, Row, Col, Button, Input, Form, FormGroup} from 'reactstrap';
// import Profile_Navbar from './Profile_Navbar';

// class Contact extends Component {

//     form = [{
//         detail : {
//             heading : 'CONTACT ME',
//         },
//         icon: {
//             one : 'fas fa-mobile',
//             two : 'fas fa-map-marker-alt',
//             three : 'fas fa-envelope'
//         },
//         numb : {
//             num: '+92 345 789',
//             location : 'Pakistan',
//             mail: 'TalhaMughal@gmail.com'
//         }
//     }];

//     render () {
//         let styles = {
//             fontSize : '20px',
//             padding: '10px',
//             border: '1px solid lightGrey',
//             borderRadius : '100%',
//             width : '50px',
//             marginLeft: '20px',
//             textAlign: 'center',
//             color: '#F67280'
//         }
//         let styles1 = {
//             fontSize : '20px',
//             padding: '10px',
//             border: '1px solid lightGrey',
//             borderRadius : '100%',
//             width : '50px',
//             marginLeft: '50px',
//             textAlign: 'center',
//             color: '#F67280'
//         }
//         let main = {
//             margin : '20px',
//             display: 'grid',
//             justifyContent : 'center'
//         }
//         var contact = this.form.map( (obj) =>{
//             return(
//                 <div>
//             <h5><strong></strong></h5>
            
//            <Profile_Navbar />
//             <hr/>

//             <Container fluid>
//                 <Row>
//                     <Col sm={4}>
//                        <div style={main}>
//                            <div style={styles}><i className={obj.icon.one}/></div>
//                            <p style={{paddingTop:'10px'}}>{obj.numb.num}</p>
//                        </div>
//                     </Col>
//                     <Col sm={4}>
                    
//                     </Col>
//                     <Col sm={4}>
//                     <div style={main}>
//                            <div style={styles1}><i className={obj.icon.three}/></div>
//                            <p style={{paddingTop:'10px', fontSize: '12px', textAlign:'center'}}>{obj.numb.mail}</p>
//                        </div>
//                     </Col>
//                 </Row>
//             </Container>
           
//             <div style={{marginTop:'30px'}}>
//                 <h5><strong>E-mail</strong></h5>
//                 <hr/>

              
          
//             <div>
//               <Form>
//                   <FormGroup>
//                   <Input type="text" name="name" placeholder="Name"/>
//                   </FormGroup>
                  
//               <FormGroup>
//               <Input type="email" name="email" placeholder="Email" />
//               </FormGroup>
//               <FormGroup>
//               <Input type="text" name="text" placeholder="Subject" />
//               </FormGroup>

//               <FormGroup>
//               <Input type="textarea" name="text" placeholder="Message" />
//               </FormGroup>
//               <FormGroup>
//               <Button style={{background: '#F67280', color: '#fff'}}>Send Me</Button>
//               </FormGroup>
//               </Form>
//             </div>
          
//             </div>
//             </div>
//             )
//         });
//         return(
//             <div>{contact}</div>
//         )
//     }
// }

// export default Contact;