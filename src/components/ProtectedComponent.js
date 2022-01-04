import '../App.css';
import {useState,useEffect} from "react";
import { Redirect } from 'react-router-dom';



import Room from "./Room.js";
import NotValidRoom from "./NotValidRoom.js";




function ProtectedComponent(props) {

  const [isValid, setIsValid] = useState();

  useEffect(()=>{

    async function checkIfValid () {
      let result = await props.checkIfValidRoom(props.match.params.id);
      setIsValid(result);
    };

    checkIfValid();
    
  },[]);

  return (

    <div className="ProtectedComponent">
      {
        isValid ? <Room roomId={props.match.params.id} setDisplayRooms={props.setDisplayRooms}/> : <NotValidRoom/>
      }
    </div> 
  );
}


export default ProtectedComponent;
//<Redirect push to= {props.redirect}/>