import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler
    } from "mdbreact";

class Header extends Component  {
    state = {
        collapse: false,
      isWideEnough: false,
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
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
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
               
            </MDBNavbar>
        );
    }
   
};

export default Header;
