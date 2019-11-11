import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,MDBBtn} from "mdbreact";
import { Grid,Paper } from '@material-ui/core';
import { InputGroup, FormControl, Form, Card,Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

import slide1 from '../../assests/Home/slides/1.jpg';
import slide2 from '../../assests/Home/slides/2.jpg';
import slide3 from '../../assests/Home/slides/3.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        style={{position: 'relative'}}
        >
          <div className="HomeSearchDiv">
          <Paper className="shadow p-3 mb-5 bg-white rounded" style={{ padding: '10px'}}>
          <Grid container justify="center" alignItems="center" spacing={2}>
              <Grid item md={12}>
                <div style={{textAlign: 'center'}}>
                      <h2 className="display-4">Find the Best Places to Be</h2>
                      
                      <small className="text-muted" style={{fontSize: '1rem'}}>All the top locations – from restaurants and clubs, to galleries, famous places and more..</small>
                </div>
                <br/>
              </Grid>
              <Grid item md={7}>
                <InputGroup size="lg">
                  <FormControl
                  placeholder="What are you looking for?"
                  style={{width: '60%'}}
                  />
                  <Form.Control as="select" style={{width: '40%'}} >
                    <option>Select a Location</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </InputGroup>
              </Grid>
              <Grid item md={1}>
              <MDBBtn gradient="purple">Search</MDBBtn>
              </Grid>
              <br/>
          </Grid>
        </Paper>
          </div>
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 "
                style={{width: '100%'}}
                src={slide1}
                alt="First slide"
            />
            </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={slide2}
                alt="Second slide"
              />
            </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={slide3}
                alt="Third slide"
              />
            </MDBView>
            </MDBCarouselItem>
            </MDBCarouselInner>
      </MDBCarousel>
      <br/>

      <Container >
      <Row className="justify-content-md-center">
        <Col md={{offset: 1 }}>
        <Card style={{textAlign: 'center', width: '18rem'}}>
            <Card.Img variant="top" src={slide2}/>
            <Card.Body>
              <Card.Title>Restuarents</Card.Title>
              <Button variant="primary">View Listings</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={{offset: 1 }}>
        <Card style={{textAlign: 'center', width: '18rem'}}>
            <Card.Img variant="top" src={slide2}/>
            <Card.Body>
              <Card.Title>Hotels</Card.Title>
              <Button variant="primary">View Listings</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>

      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <a href="#"> Ratawate.lk</a>
        </div>
      </footer>
    </div>
    );
  }
};

export default Home;