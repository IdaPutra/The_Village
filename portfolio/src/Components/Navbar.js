import React, { useState, useEffect,useRef } from "react";

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
  MDBCollapse,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
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
import image from "../Pages/the_village.png"
import DateTimePicker from 'react-datetime-picker';


function Navbar1(){

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const [value, onChange] = useState();
    return(
   

        <>
<nav class="navbar navbar-expand-lg navbar-light sticky-top" style={{boxShadow:"none",transition: '1s ease',backgroundColor: 'transparent',position:"fixed",top:0,width:"100%"}}>
  <a class="navbar-brand" href="#"><img src={image} id="logo"></img></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
  
    <form class="form-inline my-2 my-lg-0 ">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Menu <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Gallery</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item" onClick={toggleShow}>
        <a style={{borderStyle:"solid"}}class="nav-link" href="https://letsumai.com/widget/the-village-cucina-italiana" >Reservation</a>
      </li>
    </ul>
    </form>
  </div>
</nav>

  <br />

        </>
    
    )
}

export default (Navbar1);