import '../App.css';
import history from '../history.js';




function NotValidRoom(props) {

  return (

    <div className="NotValidRoom">
      <div id="room-title-container">
        <div id="room-title" onClick={()=>history.push("/home")}>Collab Drums</div>
        </div>
      <div id="error-container">
        <div id="error-msg">Not a valid room</div> 
      </div>
    </div> 
  );
}


export default NotValidRoom;