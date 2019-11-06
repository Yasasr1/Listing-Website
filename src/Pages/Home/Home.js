import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol, MDBFooter, MDBBtn, MDBInput } from
"mdbreact";
import { Grid, TextField } from '@material-ui/core';
import roundImage from '../../assests/home_image.jpg';

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
        >
        <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                style={{width: '100%'}}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                alt="First slide"
            />
            </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                alt="Second slide"
              />
            </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
            </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>

        <br/>
        <Grid container justify="center" spacing={2}>
            <Grid item md={6}>
               <div style={{textAlign: 'center'}}>
                    <strong style={{fontSize: '2rem'}}>Find the Best Places to Be</strong>
                    <br/>
                    <small style={{fontSize: '1rem'}} className="text-muted">All the top locations – from restaurants and clubs, to galleries, famous places and more..</small>
               </div>
               <br/>
               <div className="form-group" style={{width: '60%', padding: '20px'}}>
                    <Grid container spacing={4}>
                        <Grid item md={10}>
                            <MDBInput label="What are you looking for?"/>
                        </Grid>
                        <Grid item md={2}>
                            <MDBBtn gradient="purple">Search</MDBBtn>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid item md={6}>
               <div style={{textAlign: 'center'}}>
               <img
                src={roundImage}
                className="img-fluid rounded-circle hoverable"
                alt="travel"
                style={{height: '50%', width: '50%'}}
                />
               </div>
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