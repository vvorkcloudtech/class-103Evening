// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem } from 'reactstrap';
//   import { Link } from 'react-router-dom';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
  
//   render() {
//       let styles = {
//           marginRight: '2vw',
//           paddingTop:'10px',
//       }

//     return (
//       <div>
//         <Navbar dark expand="lg">
//           {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar style={{padding:'13px', listStyle: 'none', marginLeft:'48%'}}>
//               <NavItem style={styles}>
//                 <Link to="/Profile_Blog" style={{color:'#F67280', textDecoration:'none'}}><strong><i class="fas fa-blog" style={{color: '#F67280'}}/> Blog</strong></Link>
//               </NavItem>
//               <NavItem style={styles}>
//                 <Link to="/Profile_Home" style={{color:'#F67280', textDecoration:'none'}}><strong><i className="fas fa-user-alt" style={{color: '#F67280'}} /> ABOUT ME</strong></Link>
//               </NavItem>
//               <NavItem style={styles}>
//                 <Link to="/Profile_ContactUs" style={{color:'#F67280', textDecoration:'none'}}><strong><i className="fas fa-paper-plane" style={{color: '#F67280'}} /> CONTACT US</strong></Link>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }