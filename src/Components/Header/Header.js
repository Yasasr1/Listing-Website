import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBBtn} from "mdbreact";

class Header extends Component  {
    state = {
        collapse: false,
      
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
          });
    }

    render() {
        return (
            <MDBNavbar color="deep-purple darken-4" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand>
                  <strong className="white-text">Ratawate.lk</strong> 
              </MDBNavbarBrand>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Listings</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Pricing</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBBtn style={{borderRadius: '16px'}} color="amber"size="sm">Login</MDBBtn>
               
            </MDBNavbar>
        );
    }
   
};

export default Header;
