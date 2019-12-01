import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView,MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardText, MDBCardTitle, MDBIcon, MDBFooter, MDBAnimation} from "mdbreact";
import { Grid,Paper } from '@material-ui/core';
import { InputGroup, FormControl, Form} from 'react-bootstrap';
import './Home.css';
import ResturentInfo from './RestuarentInfo/RestuarentInfo';

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
                <div className="HomeSearchBar">
                      <h2 className="HomeSearchBar">Find the Best Places to Be</h2>
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

      <h3 className="text-center">
        <strong>Browse hundreds of listings </strong>
        <small className="text-muted">Restuarents, Hotels and more</small>
      </h3>

      <MDBContainer style={{textAlign: 'center'}}>
        <MDBRow>
          <MDBCol md="4">
            <MDBCard>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Hotels</MDBCardTitle>
                <MDBCardText>
                  You can browse hotels and select one
                </MDBCardText>
                <MDBBtn href="#">Explore</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
          <MDBCard>
              <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
              <MDBCardBody>
                <MDBCardTitle>Restuarents</MDBCardTitle>
                <MDBCardText>
                  You can browse Restuarents and select one
                </MDBCardText>
                <MDBBtn href="#">Explore</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
          <MDBCard>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Destinations</MDBCardTitle>
              <MDBCardText>
                You can browse destinations and select one
              </MDBCardText>
              <MDBBtn href="#">Explore</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
      <div style={{textAlign: 'center', padding: '20px', backgroundColor: '#dfdae3',marginTop: '200px'}}>
        <h2 style={{fontWeight: 'bold'}}>Top Listings around Sri Lanka</h2>
        <br/>
        <MDBAnimation reveal type="fadeInDown">
          <ResturentInfo/>
        </MDBAnimation>
        <MDBAnimation reveal type="fadeInDown">
          <ResturentInfo/>
        </MDBAnimation>
      </div>
      
      

      <section style={{backgroundColor: 'white', padding: '20px'}} className="text-center my-5">
        <h2 >Why are we unique?</h2>
        <br/>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon icon="map" size="3x" className="blue-text"/>
            <h5 className="font-weight-bold my-4">Find the perfect destination</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="map-pin" size="3x" className="orange-text" />
            <h5 className="font-weight-bold my-4">Discover the best restuarents</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="heart" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">Enjoy your vacation</h5>
            <p className="grey-text mb-md-0 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maiores aperiam minima assumenda deleniti hic.
            </p>
          </MDBCol>
        </MDBRow>
      </section>

      <MDBFooter color="deep-purple darken-4" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Ratawate.lk </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
    );
  }
};

export default Home;