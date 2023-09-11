import React from "react";
import India from '../assets/postal.png'
import National from '../assets/National-Emblem.png'
import G20 from '../assets/G20-India-2023.jpg'
import Azadi from '../assets/Azadi-Logo.png'
import './SiteHeadderc.css';
import { NavLink } from "react-router-dom";
import Headder from "./Headder.js";


export default function SiteHeadder(){
    <Headder />

    return(
      <>
    <div className="row" id="header" >
    
    <div className="col-md-4">
    <a href="https://www.indiapost.gov.in">
    <img className="img-responsive hidden-xs" src={India} id="india-post-logo" alt="India Post Logo"/>
    <img class="img-responsive hidden-xs"  src={National} alt="Emblem" id="Emblem"/> 
      </a>
      </div>

    <div className="col-md-5">
    <a href="https://www.indiapost.gov.in">
    <p className="img-responsive hidden-xs" id="text1"> Department of Posts(DOP) <br/>Ministry of Communication <br/> Government of India</p>
    </a>
      </div>

      <div className="col-md-6">
    <a href="https://www.indiapost.gov.in">
    <img className="img-responsive hidden-xs" src={G20} id="g20" alt="G20 Summit"/>
    <img class="img-responsive hidden-xs"  src={Azadi}  id="Azadi" alt="Azadi ka amrit mahotsav"/> 
        </a>
    
     <div className= "flex space-x-7 bg-gray-300 h-15 pb-4 pt-2 shadow-xs rounded-md  italic hover:not-italic text-justify">
  
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        <hr></hr>
              <div className="min-h-[10vh]"></div>
        </div>
        </div>
        </>


    );
}