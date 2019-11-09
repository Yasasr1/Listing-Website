import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBFooter, MDBBtn, MDBCard, MDBIcon, MDBCardTitle } from
"mdbreact";
import { Grid,Paper } from '@material-ui/core';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
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
        className="z-depth-1"
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

        <Grid container spacing={8} style={{margin: '100px'}}>
          <Grid item md={3}>
            <Paper>
              <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
              }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <MDBIcon icon="utensils" size="lg" />"
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Restuarents</strong>
                    </MDBCardTitle>
                    <MDBBtn color='deep-purple'>
                      <MDBIcon icon='clone left'/> View Listings
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </Paper>
          </Grid>

          <Grid item md={3}>
            <Paper>
              <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
              }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <MDBIcon icon="utensils" size="lg" />"
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Hotels</strong>
                    </MDBCardTitle>
                    <MDBBtn color='deep-purple'>
                      <MDBIcon icon='clone left'/> View Listings
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </Paper>
          </Grid>

          <Grid item md={3}>
            <Paper>
              <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
              }}
              >
                <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                  <div>
                    <MDBIcon icon="utensils" size="lg" />"
                    <MDBCardTitle tag='h3' className='pt-2'>
                      <strong>Locations</strong>
                    </MDBCardTitle>
                    <MDBBtn color='deep-purple'>
                      <MDBIcon icon='clone left'/> View Listings
                    </MDBBtn>
                  </div>
                </div>
              </MDBCard>
            </Paper>
          </Grid>
        </Grid>
        
        

       


            

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
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.ratawate.lk"> Ratawate.lk </a>
        </MDBContainer>
      </div>
    </MDBFooter>

    

            </div>
        );
    }
};

export default Home;