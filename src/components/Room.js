import '../App.css';
import {useState,useEffect, useRef} from "react";
import history from '../history.js';
import uniqid from "uniqid";

import vinyl_svg from '../public/vinyl.svg';
import play_svg from '../public/play.svg';
import pause_svg from '../public/pause.svg';
import trash_svg from '../public/trash.svg';

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3000";


function Room(props) {

  const socket = socketIOClient(ENDPOINT);
  const [roomURL,setRoomURL] = useState(null);
  const [roomId,setRoomId] = useState(null);
  //const [currentStep,setCurrentStep] = useState(1);
  const [grid,setGrid] = useState(null);
  
  const [audioNamesInitComplete, setAudioNamesInitComplete] = useState(false);
  const [audioInitComplete, setAudioInitComplete] = useState(false);
  const [gridInitComplete, setGridInitComplete] = useState(false);
  const [initComplete, setInitComplete] = useState(false);
  
  const [bpm,setBPM] = useState(null);
  const [triggerAudioObj, setTriggerAudioObj] = useState({});
  const [audioSamples, setAudioSamples] = useState(null);
  const [audioSampleNames, setAudioSampleNames] = useState(null);
  
  const [toggleAudioIcon, setToggleAudioIcon] = useState([true,true,true,true,true,true]);

  const currentStepRef = useRef(1); 
  const bpmRef = useRef(null);
  const timerRef = useRef(null);

  const initializeRoom = async () => {
    
    try {
        console.log(roomId);
        let response = await fetch('http://localhost:8080/initialize-room/'+roomId);
        response = await response.json();

        let gridArr = [];
        let audioArr = [];
        let audioNameArr = [];


        if(response.roomData[0].roomData !== null)
        {
          response.roomData[0].roomData.tracks.map(track=>{
            
            gridArr.push(track.stepArray);
            
            if(track.audioURL !== null) 
            {
              audioArr.push(new Audio(track.audioURL));
            }
            else
            {
              audioArr.push(null);
            }
            audioNameArr.push(track.audioName);
            return true;
          });

          setGrid(gridArr);
          bpmRef.current = response.roomData[0].roomData.bpm;      
          setAudioSamples(audioArr);
          setAudioSampleNames(audioNameArr);

          let currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
          setRoomURL(currentURL);


        }   

    }
    catch(e){
      console.error(e);
    }

  };

  const bpmChange = async (e,newBpm) => {
  
    if(newBpm >= 40 && newBpm <= 208)
    {
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

      } catch (e) {
        console.error(e);
      }
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
          trackNum: trackNum,
        })
      });

      const responseData = await response.json();

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

    const fileList = e.target.files;

    const formData = new FormData();
    formData.append('roomId',roomId);
    formData.append('instrumentNum',trackNum);
    formData.append('fileName',fileList[0].name);
    formData.append('contentType',fileList[0].type);

    formData.append('audioFile',fileList[0]);
    

    try {
      let response = await fetch('http://localhost:8080/update-audio-settings/',
      {
        method: 'POST',
        mode:'cors',
        headers:{
          'Accept':'application/json',
          'Origin':'http://localhost:3000/room/1gtirs1ziaky0hpww2',

        },
        body: formData,
      });

      const responseData = await response.json();
    
      if(responseData.updated)
      {
        let tempArr = [...toggleAudioIcon];
        tempArr[trackNum] = !tempArr[trackNum];
        setToggleAudioIcon(tempArr);

        let tempArr2 = [...audioSampleNames];
        tempArr2[trackNum] = fileList[0].name;
        setAudioSampleNames(tempArr2);

        let tempArr3 = [...audioSamples];
        tempArr3[trackNum] = new Audio(responseData.downloadURL);
        setAudioSamples(tempArr3);
      }

    } catch (e) {
      console.error(e);
    }


  };

  const copyText = () => {
    navigator.clipboard.writeText(roomURL);
    let div = document.querySelector('#copy-link-text');
    div.textContent = "Link copied!";

    setTimeout(()=>{
      div.textContent = "Copy link";
    },2000)
  };

  useEffect(() => {
    
    socket.on('user-connected', () => {
      console.log('a user connected');
    });

    socket.on('user-disconnected', name => {
      console.log('user disconnected:'+name);
    });
    



    setRoomId(props.roomId);


  return () => {
    socket.disconnect();
  };
    
  },[]);

  useEffect(() => {
  
    if(roomId !== null)
    {
      initializeRoom();

    }
    
  },[roomId]);


  useEffect(() => {
    

    if(bpm !== null)
    {
      if(bpm >= 40 && bpm <= 208)
      {
        bpmRef.current = bpm;
      }

      if(timerRef.current !== null)
      {
        clearTimeout(timerRef.current);
      }

      let timer = setInterval(() => {

        clearHighlight();
        highlightBoxes();
        playSounds();

        if(currentStepRef.current + 1 === 33)
        {
          currentStepRef.current = 1;
        }
        else
        {
          currentStepRef.current += 1;
        }
      },(60/bpmRef.current)*1000);

      timerRef.current = timer;


      const clearHighlight = () => {
        const divsToRemoveHighlight = document.getElementsByClassName('highlighted');

        while(divsToRemoveHighlight.length)
        {
          divsToRemoveHighlight[0].classList.remove('highlighted');
        }
      };

      const highlightBoxes = () => {

        const divsToHighlight = document.getElementsByClassName('step-'+currentStepRef.current);
        
        for(let i=0;i<divsToHighlight.length;i++)
        {
          divsToHighlight[i].classList.add('highlighted');
        }
      };

      const playSounds = () => {
        
        if(grid[0][currentStepRef.current-1] && audioSamples[0] !== null)
        {
          audioSamples[0].currentTime = 0;
          audioSamples[0].play();
        }

        if(grid[1][currentStepRef.current-1] && audioSamples[1] !== null)
        {
          audioSamples[1].currentTime = 0;
          audioSamples[1].play();
        }

        if(grid[2][currentStepRef.current-1] && audioSamples[2]!== null)
        {
          audioSamples[2].currentTime = 0;
          audioSamples[2].play();
        }

        if(grid[3][currentStepRef.current-1] && audioSamples[3] !== null)
        {
          audioSamples[3].currentTime = 0;
          audioSamples[3].play();
        }

        if(grid[4][currentStepRef.current-1] && audioSamples[4] !== null)
        {
          audioSamples[4].currentTime = 0;
          audioSamples[4].play();
        }

        if(grid[5][currentStepRef.current-1] && audioSamples[5] !== null)
        {
          audioSamples[5].currentTime = 0;
          audioSamples[5].play();
        }

      };
    }

    return () => {
      clearTimeout(timerRef.current);
    };
    
  },[bpm,grid]);

  
  useEffect(() => {

    if(grid !== null)
    {
      setGridInitComplete(true);
    }
  },[grid]);

  useEffect(() => {
    
    if(audioSamples !== null)
    {
      setAudioInitComplete(true);
    }
  },[audioSamples]);

  useEffect(() => {
    
    if(audioSampleNames !== null)
    {
      setAudioNamesInitComplete(true);
    }
  },[audioSampleNames]);

  useEffect(() => {

    if(gridInitComplete && audioNamesInitComplete && audioInitComplete)
    {
      setInitComplete(true);
      socket.emit('joining-room',roomId);
    }

  },[gridInitComplete, audioNamesInitComplete, audioInitComplete]);

  useEffect(() => {
    
    setBPM(bpmRef.current);
  },[initComplete]);

  return (
    <div className="Room">
      <div id="room-title-container">
        <div id="room-title" onClick={
          ()=>{
            history.push("/home");
            props.setDisplayRooms(false);
          }
          }>Collab Drums
        </div>
      </div>
      <div id="main-container">
        <div id="message-container"></div>
          
        </div>

        <div id="drum-grid">
          <div id="control-panel">
            <img className="control-btn" src={play_svg} alt="play button"></img>
            <img className="control-btn" src={pause_svg} alt="pause button"></img>
            <img className="control-btn" src={trash_svg} alt="trash button"></img>
            <input type="number" id="bpm" min="40" max="208" value={bpm !== null ? bpm : ""} onChange={(e)=>bpmChange(e, e.target.value)}/>
          </div>

          {
            gridInitComplete ? 
            grid.map((track,trackNum)=>{
              return (
                <div className="instrument" id={"instrument-"+trackNum} key={uniqid()}>
                  {
                    toggleAudioIcon[trackNum] ? <div className="add-sample" id={"add-sample-"+trackNum} onClick={()=>toggleSampleIcon(trackNum)}>
                      <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
                      { audioNamesInitComplete ? <div id={"add-sample-descrip-"+trackNum} className="add-sample-descrip">{audioSampleNames[trackNum] === null ? "Add Sample" : audioSampleNames[trackNum]}</div> : null }
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

                      classList.push('step-'+(index+1));

                      return (
                        <div className={classList.join(" ")} onClick={()=>gridBoxClicked(trackNum,index)} key={uniqid()}></div>
                      )
                    })
                  }

                </div>
              )
            }) : null
          }
          {
            roomURL !== null ? 
            <div id="bottom-container">
              <div id="copy-link-container">
                <div id="copy-link-text">Copy link</div> 
                <div id="copy-link-window" onClick={copyText}>{roomURL}</div>
              </div> 
            </div> : null
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

          <form action="/update-audio-settings" method="post" encType="multipart/form-data">
                      <input type="file" name="audio" className="file-input" accept=".wav,.mp3"/>
                    </form>

          <input type="file" className="file-input" accept=".wav,.mp3" onChange={(e)=>loadSample(e,trackNum)}/>
*/
