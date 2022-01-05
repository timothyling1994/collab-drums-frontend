import '../App.css';
import {useState,useEffect} from "react";
import history from '../history.js';
import uniqid from "uniqid";

import vinyl_svg from '../public/vinyl.svg';
import play_svg from '../public/play.svg';
import pause_svg from '../public/pause.svg';
import trash_svg from '../public/trash.svg';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";


function Room(props) {

  const socket = socketIOClient(ENDPOINT);
  const [roomId,setRoomId] = useState(null);
  const [grid,setGrid] = useState([]);
  const [bpm,setBPM] = useState();
  const [audioSamples, setAudioSamples] = useState([]);
  const [toggleAudioIcon, setToggleAudioIcon] = useState([true,true,true,true,true,true]);
  const [currentSocket, setCurrentSocket] = useState(null);

  const initializeRoom = async () => {
    
    try {
        console.log(roomId);
        let response = await fetch('http://localhost:8080/initialize-room/'+roomId);
        response = await response.json();

        let gridArr = [];
        let audioArr = [];
        response.room[0].roomData.tracks.map(track=>{
            gridArr.push(track.stepArray);
            audioArr.push(track.audioURL);
        });

        setBPM(response.room[0].roomData.bpm);
        setGrid(gridArr);
        setAudioSamples(audioArr);

    }
    catch(e){
      console.error(e);
    }
    //get room data from mongoDB
    //initialize the audio samples from firebase
    //

  };

  const bpmChange = async (newBpm) => {
    setBPM(newBpm);

    try {
      let response = await fetch('http://localhost:8080/update-bpm-settings/',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          roomId:roomId,
          bpm: newBpm,
        })
      });

      const responseData = await response.json();
      console.log(responseData);

    } catch (e) {
      console.error(e);
    }

  };

  const gridBoxClicked = async (trackNum,index) => {
    let tempGrid = [...grid];
    tempGrid[trackNum][index] = !tempGrid[trackNum][index];
    setGrid(tempGrid);

    try {
      let response = await fetch('http://localhost:8080/update-room-settings/',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          roomId:roomId,
          gridArr: tempGrid,
          audioSamples:audioSamples
        })
      });

      const responseData = await response.json();
      console.log(responseData);

    } catch (e) {
      console.error(e);
    }
  };

  const toggleSampleIcon = async (trackNum) => {

    let tempArr = [...toggleAudioIcon];
    tempArr[trackNum] = !tempArr[trackNum];

    setToggleAudioIcon(tempArr);

  };

  const loadSample = async (e,trackNum) => {

    console.log(e.target.files);
    const fileList = e.target.files;
    
    console.log(socket);
    socket.emit("send_audio",{
      file: fileList[0],
      roomId: roomId,
      instrumentNum: trackNum,
      fileName:fileList[0].name,
      contentType: fileList[0].type,
    });

    //send this file to firebase storage
    //

  };

  useEffect(() => {

    //setCurrentSocket(socket);
    
    socket.on('user-connected', name => {
      console.log('user connected:'+name);
    });

    socket.on('user-disconnected', name => {
      console.log('user disconnected:'+name);
      //appendMessage(`${name} disconnected`)
    });
    
    setRoomId(props.roomId);

    return () => {
      socket.disconnect();
      setCurrentSocket(null);
    };
    
  },[]);

  useEffect(() => {
  
    if(roomId !== null)
    {
      initializeRoom();
    }
    
  },[roomId]);


  useEffect(() => {
  
    //change setInterval here
    
  },[bpm]);

  return (
    <div className="Room">
      <div id="title" onClick={
        ()=>{
          history.push("/home");
          props.setDisplayRooms(false);
        }
      }>Collab Drums</div>
      <div id="main-container">
        <div id="message-container"></div>
          
        </div>

        <div id="drum-grid">
          <div id="control-panel">
            <img className="control-btn" src={play_svg} alt="play button"></img>
            <img className="control-btn" src={pause_svg} alt="pause button"></img>
            <img className="control-btn" src={trash_svg} alt="trash button"></img>
            <input type="number" id="bpm" value={bpm} onChange={(e)=>bpmChange(e.target.value)}/>
            
          </div>

          {
            grid.map((track,trackNum)=>{
              return (
                <div className="instrument" id={"instrument-"+trackNum}>
                  {
                    toggleAudioIcon[trackNum] ? <div className="add-sample" id={"add-sample-"+trackNum} onClick={()=>toggleSampleIcon(trackNum)}>
                      <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
                      <div className="add-sample-descrip">Add Sample</div>
                    </div> : 
                    <input type="file" className="file-input" accept=".wav,.mp3" onChange={(e)=>loadSample(e,trackNum)}/>
                  }

                  {
                    track.map((box,index) => {

                      let classList = ["drum-box"];

                      if(box)
                      {
                        classList.push("clicked");
                      }

                      if((index+1) % 4 === 1)
                      {
                        classList.push("first");
                      }
                      else if((index+1) % 4 === 0)
                      {
                        classList.push("fourth")
                      }

                      return (
                        <div id={"step-"+index} className={classList.join(" ")} onClick={()=>gridBoxClicked(trackNum,index)} key={uniqid()}></div>
                      )
                    })
                  }

                </div>
              )
            })
          }


        </div>
      
    </div>
  );
}

export default Room;

/*<form id="send-container">
            <input type="text" id="message-input"/>
            <button type="submit" id="send-button">Send</button>
          </form>
*/
