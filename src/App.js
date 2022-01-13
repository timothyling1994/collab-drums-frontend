import './App.css';
import {useState,useEffect} from "react";
import uniqid from "uniqid";
import { Router, Switch, Route } from "react-router-dom";
import history from './history.js';

import ProtectedComponent from "./components/ProtectedComponent.js";


function App() {

  const [displayRooms, setDisplayRooms] = useState(false);
  const [roomList, setRoomList] = useState([]);


  const toggleDisplayRooms = () => {
    setDisplayRooms(true);
  };

  const checkIfValidRoom = async (roomId) => {
    try {
        //let response = await fetch('http://localhost:8080/room/'+roomId);
        let response = await fetch('https://collab-drums-backend.herokuapp.com/room/'+roomId);
        response = await response.json();
        return response.isValid;
    }
    catch(e){
      console.error(e);
      return false;
    }
  };

  const createPublicRoom = async () => {
    try {
        //let response = await fetch('http://localhost:8080/create-public-room',{
        let response = await fetch('https://collab-drums-backend.herokuapp.com/create-public-room',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },

        });
        response = await response.json();
        history.push("/room/"+response.roomId);
    
    }
    catch(e){
      console.error(e);
    }
  };

  const createPrivateRoom = async () => {
    try {
        //let response = await fetch('http://localhost:8080/create-private-room',{
        let response = await fetch('https://collab-drums-backend.herokuapp.com/create-private-room',{
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },

        });
        response = await response.json();
        history.push("/room/"+response.roomId);
    
    }
    catch(e){
      console.error(e);
    }
  };

  useEffect(() => {

    (async () => {
      
      try{
        //let response = await fetch('http://localhost:8080/display-public-rooms');
        let response = await fetch('https://collab-drums-backend.herokuapp.com/display-public-rooms');
        response = await response.json();
        setRoomList(response.rooms);

      }
      catch(e){
        console.error(e);
      }
    })();

  },[displayRooms]);




  return (
    <div className="App">
      
      <Router history={history}>
        <Switch>
          <Route exact path="/">
              <div id="main-container-title">
                <div id="title" onClick={
                  ()=>
                  {
                    history.push("/home");
                    setDisplayRooms(false);
                  } 

                }>Collab Drums</div>
              </div>
              <div id = "home-page-options">
              {
                displayRooms ? <div id="public-room-container">
                    {
                      roomList.map(function(room){
                        return (
                          <div className="roomList-container">
                            <div className="roomList" key={uniqid()} onClick={()=>history.push("/room/"+room.roomId)}>Join {room.roomId}</div>
                          </div>
                          )
                      })
                    }
                </div> : 

                <div>
                  <div id="join-public-room">
                    <button className="main-btn" onClick={toggleDisplayRooms}>Join Public Room</button>
                  </div>
                  <div id="create-public-room">
                    <button className="main-btn" onClick={createPublicRoom}>Create Public Room</button>
                  </div>
                  <div id="create-private-room">
                    <button className="main-btn" onClick={createPrivateRoom}>Create Private Room</button>
                  </div>
                </div>  
              }
              </div>
          </Route>

          <Route path="/room/:id" render={(props) => 
              <ProtectedComponent
                checkIfValidRoom={checkIfValidRoom}
                redirect='/home'
                history={history}
                setDisplayRooms={setDisplayRooms}
                {...props}
              />
          } />

        
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
