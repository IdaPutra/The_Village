
   
import React, { useState, useEffect } from "react";

import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage} from 'mdb-react-ui-kit';
import "./style.css";
import { connect } from "react-redux";
import Navbar1 from "../Components/Navbar";
import { HiChevronDoubleDown } from "react-icons/hi";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import axios from "axios";
import Cookies from 'universal-cookie';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
  } from 'mdbreact';
function About(){
 
    return(
        < >

    
      <div className="About">
        <br></br>
        <br></br>
        <br></br>
<div className="row">
    <div className="col-6">
    <br></br>
    <br></br>
    <br></br>
    <div className="About_text" style={{marginLeft:"20%"}}>
    <h1 style={{textAlign:"center", color:"rgb(181, 138, 75)"}}>About The Village</h1><br></br>
        <p style={{textAlign:"center", color:"black"}}>The Village Italian restaurant and lounge is an iconic restaurant in the popular tourism destination of Sanur that brings people together to share great Italian food, wine and conversation. This smart dining environment in Sanur has been tastefully designed to create a warm and inviting ambience. There are defined spaces to anticipate varied dining needs with intimate table settings for couples and areas where groups can socialize in style. An outdoor terrace beneath a canopy of trees provides a refreshing spot to enjoy informal eating with friends. And for a more sophisticated dining experience, there is an elegant dining room with full air-conditioning for comfort.</p>
        <br></br>
        
    </div>
       
    </div>
    <div className="col-6">
<img src="https://thevillage-bali.com/wp-content/uploads/2019/01/village-011419-gallery-13-683x1024.jpg" style={{width:"60%",marginLeft:"28%",marginTop:"5%"}}></img>
    </div>
</div>
      </div>
<br></br>
<div>
  
</div>
        </>
    )
}

export default (About);
