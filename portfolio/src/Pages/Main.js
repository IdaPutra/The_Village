
   
import React, { useState, useEffect } from "react";
import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage,MDBFooter,MDBIcon,MDBCol,MDBContainer,MDBRow} from 'mdb-react-ui-kit';
import "./style.css";
import Navbar1 from "../Components/Navbar";
import food from './food.jpg'
import wine from './drinks.jpg'
import contact from "./contact.png"
import good from "./good.mp4"
import dinner_1 from "./menu/Menu_2022-01.jpg"
import dinner_2 from "./menu/Menu_2022-02.jpg"
import dinner_3 from "./menu/Menu_2022-03.jpg"

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
function Main(){
  const [pageNumber, setPageNumber] = useState(10);
  const [menuSelected, setMenuselected] = useState("Dinner Seating");


  const images = [
    dinner_1,
    dinner_2,
    dinner_3
];
    return(
        < >

    
      <div className="Main">
       
    <video src={good} autoPlay loop muted></video>

   <Navbar1/>

      </div>
<br></br>
<div className="row no-gutters">

  <div className="col-lg-6 col-sm-12">
  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <img src="https://www.easybistro.com/storage/app/media/our-food-bg-5.png" style={{width:"70%",marginBottom:"15%"}}>

    </img>
  </div>
  <div className="col-lg-6 col-sm-12">
    <div style={{marginTop:"30%"}}>
    
 
  
    <h1 id="about_title" style={{color:"white",fontFamily:"Italiana",fontSize:"70px"}}>About</h1><br></br>
        <p style={{ color:"white",width:"80%",fontFamily:"Italiana",fontSize:"20px"}}>The Village Italian restaurant and lounge is an iconic restaurant in the popular tourism destination of Sanur that brings people together to share great Italian food, wine and conversation. This smart dining environment in Sanur has been tastefully designed to create a warm and inviting ambience. 
        <br></br>
        <br></br>
        There are defined spaces to anticipate varied dining needs with intimate table settings for couples and areas where groups can socialize in style. An outdoor terrace beneath a canopy of trees provides a refreshing spot to enjoy informal eating with friends. And for a more sophisticated dining experience, there is an elegant dining room with full air-conditioning for comfort.</p>

  </div>
  </div>
</div>
<div className="Experience">
<br></br>
<br></br>

<h1 style={{textAlign:"center",color:"white"}}> &nbsp;What Sets Us Apart &nbsp; </h1>

<div style={{marginTop:"3%"}}>
<div className="row">

  <div className="col-4">
  <img className="center" src={food} style={{width:"60%",borderRadius:"2%"}}></img>
  <p style={{color:"white", textAlign:"center",marginTop:"7%"}}>Delicious Menu Item</p>
  </div>
  <div className="col-4">
    <div>
    <img className="center" src={wine} style={{width:"70%",borderRadius:"2%"}}></img>
    <p style={{color:"white",  textAlign:"center",marginTop:"7%"}}>Unequalled Drinks</p>
  </div>
  </div>
  <div className="col-4">
    <div>
    <img className="center" src={food} style={{width:"60%",borderRadius:"2%"}}></img>
    <p style={{color:"white",  textAlign:"center",marginTop:"7%"}}>Vibrant Entertainment</p>

  </div>
  </div>
</div>
</div>

<br></br>
<br></br>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
 <div className="Menu" >
 <div  className="row">
  <div className="col-6">
  <h1 style={{color:"white"}}> &nbsp; Explore Our Menu &nbsp; </h1>
  </div>
  <div className="col-6">
  <div className="row" style={{marginTop:"3%"}} >
  <div className="col-4">
<button style={{backgroundColor:"transparent" ,borderBottom:menuSelected =="Breakfast & Brunch" ? "5px solid white": "",transition:"border-bottom 1s",border:"none"}} onClick={()=>setMenuselected("Breakfast & Brunch")}><p style={{textAlign:"center",fontStyle:"oblique"}}>Breakfast & Brunch</p></button>
  </div>
  <div className="col-4">
  <button style={{backgroundColor:"transparent",borderBottom:menuSelected =="Dinner Seating" ? "5px solid white": "",transition:"border-bottom 1s",border:"none"}} onClick={()=>setMenuselected("Dinner Seating")}> <p style={{textAlign:"center" ,fontStyle:"oblique"}}>Dinner Seating</p></button>
  </div>
  <div className="col-4">
  <button style={{backgroundColor:"transparent" ,borderBottom:menuSelected =="Wine & Bites" ? "5px solid white": "",transition:"border-bottom 1s",border:"none"}} onClick={()=>setMenuselected("Wine & Bites")}><p style={{textAlign:"center",fontStyle:"oblique"}}>Wine & Bites</p></button>
  </div>
</div>
  </div>
  </div> 

<div style={{marginTop:"5%"}}>
 

<div >
<h2 style={{textAlign:"center",marginTop:"10%",marginBottom:"5%"}}>{menuSelected}</h2>
<div className="row">
  <div className="col-6">
      <div  className="col-4">

      </div>
      <div  className="col-4">
        
        </div>
        <div  className="col-4">
        
        </div>
  </div>
  <div className="col-6">
  <div  className="col-4">

</div>
<div  className="col-4">
  
  </div>
  <div  className="col-4">
  
  </div>
    </div>
</div>
    </div>
</div>
<br></br>
<br></br>

<br></br>
<br></br>

</div> 

<div className="contact">
<h1 style={{textAlign:"center"}}> &nbsp; Contact Us &nbsp; </h1>
<div style={{marginLeft:"3%"}}>
<img src={contact} id="image_contact"></img>

<div className="row ">
  <div className="col-6">
    <div style={{marginTop:"7%"}}>
    <p style={{textAlign:"center"}}>Location: </p>
    <p style={{textAlign:"center"}}>Telephone:+62 361 285 025 </p>
    <p style={{textAlign:"center"}}>Whatsapp:+62 896-6181-4488 </p>
    <p style={{textAlign:"center"}}>Location: JL. Danau Tamblingan 47, Sanur – Bali</p>

    </div>
    
  </div>
  <div className="col-6">
    <div style={{marginTop:"7%"}}>
    <p style={{textAlign:"center"}}>Opening Hours:</p>
    <p style={{textAlign:"center"}}>Breakfast And Brunch: 08:00 AM - 10:00 AM</p>
    <p style={{textAlign:"center"}}>Wine And Bites: 04:00 PM - 06:00 PM</p>
    <p style={{textAlign:"center"}}>Dinner Seating	: 06:00 PM - 11:00 PM</p>
    </div>
    
  </div>
</div>
</div>

</div>
<MDBFooter bgColor='#060D0D' className='text-center text-lg-start text-muted' style={{marginTop:"10%"}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                The Village Cucina Italiana
              </h6>
              <p>
              The Village Italian restaurant and lounge is an iconic restaurant in the 
              popular tourism destination of Sanur that brings people together to share great Italian food, wine and conversation.
              </p>
            </MDBCol>

         
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Content</h6>
              <p>
                <a href='#!' className='text-reset'>
                Reservation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
               About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Menu
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Gallery
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                Location: JL. Danau Tamblingan 47, Sanur – Bali
              </p>
         
              <p>
              Telephone:+62 361 285 025
              </p>
              <p>
              Whatsapp:+62 896-6181-4488
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>


    </MDBFooter>



        </>
    )
}

export default (Main);
