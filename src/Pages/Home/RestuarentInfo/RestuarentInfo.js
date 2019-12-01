import React from 'react';
import { MDBRow, MDBCol, MDBIcon} from "mdbreact";
import { Paper } from '@material-ui/core';
import '../Home.css';

const RestuarentInfo = (props) => {
    return (
        <Paper style={{marginBottom: '50px'}}>
            <MDBRow>
              <MDBCol md="4">
                <img className="HomeTopListingImage" src="https://media-cdn.tripadvisor.com/media/photo-s/14/b1/fb/dc/cover.jpg" alt="restuarent"/>
              </MDBCol>
              <MDBCol md="8">
                <h3>Restaurant name</h3>
                <br/>
                <p>description description description description description description description description description</p>
                <br/>
                <br/>
                <br/>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBIcon icon="map-marker-alt" className="red-text"/>
                    <p>location</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBIcon icon="phone-alt" className="blue-text"/>
                    <p>Contact No</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBIcon icon="star" className="orange-text"/>
                    <p>Rating</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>      
          </Paper>
    );
};

export default RestuarentInfo;