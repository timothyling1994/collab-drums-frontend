import '../App.css';
import {useState,useEffect} from "react";

import Room from "./Room.js";
import NotValidRoom from "./NotValidRoom.js";



function ProtectedComponent(props) {

  const [isValid, setIsValid] = useState(true);
  const {checkIfValidRoom} = props;
  const id = props.match.params.id;

  useEffect(()=>{

    async function checkIfValid () {
      console.log(id);
      let result = await checkIfValidRoom(id);
      setIsValid(result);
    };


    checkIfValid();

    
  },[checkIfValidRoom,id]);

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