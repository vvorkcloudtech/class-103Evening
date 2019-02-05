import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
    import Profile_Navbar from './Profile_Navbar';

class Gallery extends Component{
    render() {
        return(
            <div>
                <br/><br/><br/><br/>
            <h5><strong></strong></h5>
                <Profile_Navbar/>
                <hr/>

                <Card style={{backgroundColor:'#eee', padding: '13px'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-1.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button style={{background:'#F67280', color:"#fff"}}>Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>
      <br/>

      <Card style={{backgroundColor:'#eee', padding: '13px'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-2.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button style={{background:'#F67280', color:"#fff"}}>Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>
      <br/>

      <Card style={{backgroundColor:'#eee', padding: '13px', marginBottom:'30px'}}>
        <CardImg top width="100%" src="http://new.uouapps.com/remoticv/images/blog-img-3.jpg" alt="Card image cap" />
        <div><p style={{fontSize:'12px', padding:'20px'}}> <span> <i className="far fa-calendar"/>&nbsp;&nbsp;Aug 29, 2016</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-user"/>&nbsp; Admin</span>
         &nbsp;&nbsp;&nbsp;<span> <i className="far fa-comments"/>&nbsp; Feature</span>
        </p></div>
        <CardBody>
          <CardTitle><strong>ENJOY THE SMALL THINGS</strong></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button style={{background:'#F67280', color:"#fff"}}>Read More <i className="fas fa-chevron-right"/></Button>
        </CardBody>
      </Card>




      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#">
            Prev
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
           Next
          </PaginationLink>
        </PaginationItem>
      </Pagination>
            </div>
        )
    }
}

export default Gallery;