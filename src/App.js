import './App.css';
import {useState,useEffect} from "react";
import uniqid from "uniqid";
import { Router, Switch, Route } from "react-router-dom";
import history from './history.js';

import Room from "./components/Room.js";


function App() {

  const [displayRooms, setDisplayRooms] = useState(false);
  const [roomList, setRoomList] = useState();
  const [isValidRoom, setIsValidRoom] = useState(false);


  const toggleDisplayRooms = () => {
    setDisplayRooms(true);
  };

  const checkIfValidRoom = async (roomId) => {
    try {
        let response = await fetch('http://localhost:8080/room/'+roomId);
        response = await response.json();
        console.log(response.isValid);
        setIsValidRoom(true);
    }
    catch(e){
      console.error(e);
      setIsValidRoom(false);
    }
  };

  const checkIfValid = () => {
    console.log("checked");
  };


  useEffect(() => {

    (async () => {
      
      try{
        let response = await fetch('http://localhost:8080/join-public-room');
        response = await response.json();
        setRoomList(response.rooms);

      }
      catch(e){
        console.error(e);
      }
    })();

  },[]);



  return (
    <div className="App">
      
      <Router history={history}>
        <Switch>
          <Route exact path="/home">
              <div id="main-container-title">Collab Drums</div>
              {
                displayRooms ? <div id="public-room-container">
                    {
                      roomList.map(function(room){
                        return (<div className="roomList" key={uniqid()} onClick={()=>history.push("/room/"+room.roomId)}>Join {room.roomId}</div>)
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
          </Route>

          <Route path="/room/:id" render={(props) => {
                try {
                  const isValid = checkIfValidRoom(props.match.params.id);
                  if(isValidRoom)
                  {
                    return <Room/>;
                  }
                  else
                  {
                    history.push("/home");
                  }
                }
                catch(e){
                  console.error(e);
                }    
                
            }}>


          </Route>

        
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
//<Route path="/room/:id" render={(props) => <Room {...props} />} />
