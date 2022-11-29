
   
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
function Functional(){
  const [selected,  setSelected] = useState('searchTag');
  const [searched, setSearched] = useState("")
  const [response, setResponse] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [number, setNumber] = useState(1)





  function handleChange(event) {

    console.log(searched)
    if(selected=="searchTag"){
      let hello=event.target.value.split(",")
      setSearched(hello);
    }

    if(selected=="searchImage"){

      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(img); 
        reader.onloadend = function() {
          var base64data = reader.result;                
          console.log(base64data.split(','));
          base64data = base64data.split(',')[1]
          setSearched(base64data)
        }
    }}

    if(selected=="editTags"){
      let hello=event.target.value.split(",")
      setSearched(hello);

    }
  

    if(selected=="deleteImage"){
      let hello=event.target.value
      setSearched(hello);
    }


    
  
  
  }


  
  function handleChange1(event) {

   setImageUrl(event.target.value)

 
  
  
  }


  function handleChange2(event) {

    setNumber(event.target.value)
  console.log(typeof(number))
   console.log('whatever')
   
   }



  
  async function handleSubmit_search_tags (event)  {
    event.preventDefault()
    
  
    await axios.post(`https://8drxduff2h.execute-api.us-east-1.amazonaws.com/dev/api/search-by-tag`, {
        "tags": searched
      })
      .then(res => {
        console.log(res);
        setResponse(res.data.body)
      })
  }
  
  async function handleSubmit_search_image (event) {
    event.preventDefault()
    console.log(imageUrl)
  
    await axios.post(`https://8drxduff2h.execute-api.us-east-1.amazonaws.com/dev/api/search-by-image`, { "image":searched  })
      .then(res => {
        console.log(res);
        setResponse(res.data.body);
      })
  }

  async function handleSubmit_edit_tags (event) {
    event.preventDefault()
    console.log(imageUrl,searched,number)
    await axios.post(`https://8drxduff2h.execute-api.us-east-1.amazonaws.com/dev/api/edit-tags`,  {
        "url": imageUrl,
        "type": parseInt(number),
        "tags": searched
      })
      .then(res => {
        console.log(res);
        setResponse("Success");
      })
  }

  async function handleSubmit_delete_image (event)  {
    event.preventDefault()
  
  
    await axios.post(`https://8drxduff2h.execute-api.us-east-1.amazonaws.com/dev/api/delete`, {
        "url": searched
      })
      .then(res => {
        console.log(res);
        setResponse(res.config.data)
      })
  }

  
  



  let input_searchtag = <>
     <div class="row">
           <div class="col-sm-12">
        <h1 style={{textAlign:"center"}}>Search Tag</h1>
        <br></br>
      <br></br>
        <div style={{marginLeft:"44%"}}>
        <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control"  onChange={handleChange}/>
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" onClick={handleSubmit_search_tags}>
    <i class="fas fa-search"></i>
  </button>
</div>
        </div>
      
      </div>
                 
           </div>
  </> 

let search_image = <>
<div class="row">
      <div class="col-sm-12">
   <h1 style={{textAlign:"center"}}>Search Image</h1>
   <br></br>
 <br></br>
   <div style={{marginLeft:"41%"}}>
   <div class="input-group">
   <div class="form-outline">
    <input type="file" id="form1" class="form-control"  onChange={handleChange}/>
    <label class="form-label" for="form1"></label>
  </div>
  <button type="button" class="btn btn-primary" onClick={handleSubmit_search_image}>
    <i class="fas fa-search"></i>
  </button>
</div>
   </div>
 
 </div>
            
      </div>
</> 


let edit_tags = <>
     <div class="row">
           <div class="col-sm-12">
        <h1 style={{textAlign:"center"}}>Edit or Delete Tag</h1>
        <br></br>
      <br></br>
      <select id="leave" onChange={e => handleChange2(e)} value={number} style={{marginLeft:"46%"}}>
  <option value="1">Edit</option>
  <option value="0">Delete</option>

</select>
<br></br>
<br></br>
      <div style={{marginLeft:"44%"}}>
        <div class="input-group">
        <div class="form-outline">
    <input type="search" id="form1" class="form-control"  onChange={handleChange}/>
    <label class="form-label" for="form1">Enter tag names</label>
  </div>
</div>
        </div>
        <div style={{marginLeft:"44%"}}>
        <div class="input-group">
        <div class="form-outline">
    <input type="search" id="form1" class="form-control"  onChange={handleChange1}/>
    <label class="form-label" for="form1">Enter Url</label>
  </div>
  <button type="button" class="btn btn-primary" onClick={handleSubmit_edit_tags}>
    <i class="fas fa-search"></i>
  </button>
</div>
        </div>
      
      </div>
                 
           </div>
  </> 


let delete_image = <>
     <div class="row">
           <div class="col-sm-12">
        <h1 style={{textAlign:"center"}}>Delete Image</h1>
        <br></br>
      <br></br>
        <div style={{marginLeft:"44%"}}>
        <div class="input-group">
        <div class="form-outline">
    <input type="search" id="form1" class="form-control"  onChange={handleChange}/>
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" onClick={handleSubmit_delete_image}>
    <i class="fas fa-search"></i>
  </button>
</div>
        </div>
      
      </div>
                 
           </div>
  </> 

  

    const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;
    return(
        < >
        <Navbar1/>
    
      <div className="Main">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container2">
          <div style={{marginLeft:"38%"}}>
          <div class="btn-group shadow-0" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark" onClick={() =>setSelected('searchTag')}>Search Tag</button>
  <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark"  onClick={() =>setSelected('searchImage')}>Search Image</button>
  <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark" onClick={()=>setSelected('editTags')}>Edit Tags</button>
  <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark" onClick={()=>setSelected('deleteImage')}>Delete Image</button>
</div>  
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      
     
         {selected=='searchTag' && input_searchtag}

         {selected=='searchImage' && search_image}
         {selected=='editTags' && edit_tags}
         {selected=='deleteImage' && delete_image}
    
           <br></br>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<p style={{textAlign:"center",fontSize:"20px"}}>See Json Result</p>
<Bounce> <HiChevronDoubleDown style={{color:"blue",marginLeft:"49%"}} size={40}/></Bounce>


<h3 style={{textAlign:"center"}}>{response}</h3>
       </div>


      </div>

        </>
    )
}

export default (Functional);
