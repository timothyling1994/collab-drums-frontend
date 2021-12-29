import './App.css';
import {useState,useEffect} from "react";
import uniqid from "uniqid";


function App() {

  const [displayRooms, setDisplayRooms] = useState(false);
  const [roomList, setRoomList] = useState();

  const toggleDisplayRooms = () => {
    setDisplayRooms(true);
  };

  const joinRoom = async (roomId) => {
    try {
        let response = await fetch('http://localhost:8080/'+roomId);
        response = await response.json();
        console.log(response);
        //if there's a response, then join the room
    }
    catch(e){
      console.error(e);
    }
  };

  useEffect(() => {

    (async () => {
      
      try{
        let response = await fetch('http://localhost:8080/join-public-room');
        response = await response.json();
        console.log(response);
        setRoomList(response.rooms);

      }
      catch(e){
        console.error(e);
      }
    })();

  },[]);



  return (
    <div className="App">
      <div id="main-container-title">Collab Drums</div>
      {
        displayRooms ? <div id="public-room-container">
            {
              roomList.map(function(room){
                return (<div className="roomList" onClick={()=>joinRoom(room.roomId)}>Join {room.roomId}</div>)
              })
            }
        </div> : 

        <div>
          <div id="join-public-room">
            <button className="main-btn" onClick={toggleDisplayRooms}>Join Public Room</button>
          </div>
          <div id="create-public-room">
            <button className="main-btn" type="submit">Create Public Room</button>
          </div>
          <div id="create-private-room">
            <form action="/create-private-room" method="POST">
              <button className="main-btn" type="submit">Create Private Room</button>
            </form>
          </div>
        </div>  
      }
  
    </div>
  );
}

export default App;
