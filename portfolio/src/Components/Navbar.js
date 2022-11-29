import React, { useState, useEffect } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { connect } from "react-redux";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import '../Pages/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Navbar1(){

  
    return(
   

        <>

 <div style={{width:"90%",marginLeft:"8%"}}>
 <div className="row ">
  <div className="col-6">
<img src="https://thevillage-bali.com/wp-content/uploads/2018/01/logo-village-horizontal-small.jpg" style={{height:"60%"}}></img>
  </div>
  <div className="col-4">
  <MDBBtn outline color="white" style={{marginLeft:"100%"}}>Reservation</MDBBtn>
  </div>
  <div className="col-2">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
  </div>
</div>
 </div>

  <br />

        </>
    
    )
}

export default (Navbar1);