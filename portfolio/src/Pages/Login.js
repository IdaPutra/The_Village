
   
import React, { useState, useEffect } from "react";
import UserPool from "../Components/UserPool";
import{CognitoUser,AuthenticationDetails}from"amazon-cognito-identity-js";
import { MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader, MDBCardFooter,MDBCardImage} from 'mdb-react-ui-kit';
import "./style.css";
import { connect } from "react-redux";
import Navbar1 from "../Components/Navbar";
import Cookies from 'universal-cookie';
function Login(){
  const [email,setEmail] = useState ("")

  const [password, setPassword] = useState ("")
  const cookies = new Cookies();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email,password)

    const user= new CognitoUser({
      Username:email,
       Pool:UserPool,
     });
     const authDetails= new AuthenticationDetails({
      Username:email,
      Password:password,
     });

     user.authenticateUser(authDetails,{
      onSuccess:(data)=>{
        let json_data = data.accessToken.jwtToken
        cookies.set('token', json_data, { path: '/' });
        window.location.reload()
     },
      onFailure:(err)=>{
        console.error("onFailure:",err);
     },
     newPasswordRequired:(data)=>{
        console.log("newPassword Required:",data);
     },
    });

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
  <input type="text" className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
</div>
<br></br>
    <br></br>
 <button type="button" className="btn btn-secondary btn-block" onClick={onSubmit}>LOGIN</button>
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

export default (Login);
