import '../App.css';
import {useState,useEffect} from "react";
import { Redirect } from 'react-router-dom';


import history from '../history.js';
import Room from "./Room.js";




function NotValidRoom(props) {

  return (

    <div className="NotValidRoom">
      <div id="title" onClick={()=>history.push("/home")}>Collab Drums</div>
      <div id="error-container">
        <div id="error-msg">Not a valid room</div> 
      </div>
    </div> 
  );
}


export default NotValidRoom;