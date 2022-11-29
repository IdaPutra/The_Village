
   
import React, { useState, useEffect } from "react";
import UserPool from "../Components/UserPool";

import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage} from 'mdb-react-ui-kit';
import "./style.css";
import { connect } from "react-redux";
import Navbar1 from "../Components/Navbar";

function Signup(){

  const [email,setEmail] = useState ("")
  const [firstname,setFirstname] = useState ("")
  const [lastname, setLastname] = useState ("")
  const [password, setPassword] = useState ("")



  const onSubmit = (event) => {
    event.preventDefault();
    console.log(firstname,email,lastname,password)
    UserPool.signUp(email,password,[{Name:"name",Value:firstname},{Name:"given_name",Value:lastname}], null, (err, data)=> {
      if(err){
        console.error(err); 
      }
      console.log(data)
    })

  }

    return(
        < >
        <Navbar1/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="login" style={{width:"40%",marginLeft:"30%"}}>
      
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <br></br>
    <br></br>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="FirstName" value={firstname} onChange={(event) => setFirstname(event.target.value)} />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="LastName"  value={lastname} onChange={(event) => setLastname(event.target.value)} />
</div>
<div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
  </div>
  <input type="text" className="form-control" placeholder="Email"   value={email} onChange={(event) => setEmail(event.target.value)}/>
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" placeholder="Password"   value={password} onChange={(event) => setPassword(event.target.value)}/>
</div>
<br></br>
    <br></br>
 <button type="button" className="btn btn-secondary btn-block" onClick={onSubmit}>Sign Up</button>
 <br></br>
    <br></br>

   </form>
           
          </div>
        </div>
       </div>   

      </div>

        </>
    )
}

export default (Signup);
