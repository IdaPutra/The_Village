
   
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
import About from './About'
function Main(){
 
    return(
        < >

    
      <div className="Main">
        <br></br>
   <Navbar1/>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
  
   <div className="row">
     <div className="col-12">
     <MDBBtn outline color="white" style={{marginLeft:"19%"}}><p style={{fontSize:"17px", textAlign:"left" ,color:"white", fontFamily:'Brandon-font",Sans-serif'}}>Welcome To <br></br> The Village Restaurant</p></MDBBtn>
     </div>
   </div>

   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
  <div className="footer_main" style={{marginLeft:"20%"}}>
  <div className="row">
   <div className="col-4">

   </div>
   <div className="col-4">
    <p></p> 
     </div>
     <div className="col-4">
    <p></p> 
     </div>
   </div>
  </div>

      </div>
<br></br>
<div>
<About/>

</div>

<br></br>
<div className="row no-gutters">

  <div className="col-6">
    
    <img src="https://www.easybistro.com/storage/app/media/our-food-bg-5.png" style={{width:"90%"}}>

    </img>
  </div>
  <div className="col-6">
    <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   
    <h1 style={{textAlign:"center",color:"rgb(181, 138, 75)"}}>Menu</h1>
    <br></br>
    <br></br>
       
    <div style={{marginLeft:"10%"}}>
    <div className="row">
      <div className="col-6">
      <MDBCard style={{ width: "18.5rem", height:"25rem" }}>
      <MDBCardBody className="allday">
        
        </MDBCardBody>
      </MDBCard>
      </div>
      <div className="col-6">
      <MDBCard style={{ width: "18.5rem", height:"25rem" }}>
      <MDBCardBody className="dessert">
        
        </MDBCardBody>
      </MDBCard>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="row">

       
        <div className="col-6">
        <MDBCard style={{ width: "18.5rem", height:"22rem" }}>
        <MDBCardBody className="wine">
        
        </MDBCardBody>
      </MDBCard>
        </div>
        <div className="col-6">
        <MDBCard style={{ width: "18.5rem", height:"22rem" }}>
        <MDBCardBody className="drink">
        
        </MDBCardBody>
      
      </MDBCard>
        </div>
        </div>
    </div>

  </div>
  </div>
</div>

        </>
    )
}

export default (Main);
