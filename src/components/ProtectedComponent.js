import '../App.css';
import {useState,useEffect} from "react";

import Room from "./Room.js";



function ProtectedComponent(props) {

  const [isValid, setIsValid] = useState(false);

  useEffect(()=>{

    let checkIfValid = async () => {
      let result = await props.checkIfValidRoom(props.match.params.id);
      setIsValid(result);
    };

    checkIfValid();
    
  },[props.match.params.id]);

  return (

    <div className="ProtectedComponent">
      {
        isValid ? <Room/> : null
      }
    </div> 
  );
}


export default ProtectedComponent;
