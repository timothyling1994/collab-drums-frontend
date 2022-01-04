import '../App.css';
import {useState,useEffect} from "react";
import history from '../history.js';

import vinyl_svg from '../public/vinyl.svg';
import play_svg from '../public/play.svg';
import pause_svg from '../public/pause.svg';
import trash_svg from '../public/trash.svg';



function Room(props) {

  const [roomId,setRoomId] = useState(null);
  const [grid,setGrid] = useState([]);
  const [bpm,setBPM] = useState(120);
  const [audioSamples, setAudioSamples] = useState([]);

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

  useEffect(() => {
  
    setRoomId(props.roomId);
    
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
            <input type="number" id="bpm" value={bpm}/>
            
          </div>

          {
            grid.map((track,index)=>{
              return (
                <div className="instrument" id={"instrument-"+index}>
                  <div className="add-sample">
                    <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
                    <div className="add-sample-descrip">Add Sample</div>
                  </div>

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
                        <div id={"step-"+index} className={classList.join(" ")}></div>
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
          <div className="instrument" id="instrument-1">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>
          
          <div className="instrument" id="instrument-2">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>

          <div className="instrument" id="instrument-3">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>

          <div className="instrument" id="instrument-4">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>

          <div className="instrument" id="instrument-5">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>

          <div className="instrument" id="instrument-6">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>

          <div className="instrument" id="instrument-7">
            <div className="add-sample">
              <img className="sample-icon" src={vinyl_svg} alt="sample button"></img>
              <div className="add-sample-descrip">Add Sample</div>
            </div>
            <div className="drum-box first step-1"></div>
            <div className="drum-box step-2"></div>
            <div className="drum-box step-3"></div>
            <div className="drum-box fourth step-4"></div>
            <div className="drum-box first step-5"></div>
            <div className="drum-box step-6"></div>
            <div className="drum-box step-7"></div>
            <div className="drum-box fourth step-8"></div>
            <div className="drum-box first step-9"></div>
            <div className="drum-box step-10"></div>
            <div className="drum-box step-11"></div>
            <div className="drum-box fourth step-12"></div>
            <div className="drum-box first step-13"></div>
            <div className="drum-box step-14"></div>
            <div className="drum-box step-15"></div>
            <div className="drum-box fourth step-16"></div>
            <div className="drum-box first step-17"></div>
            <div className="drum-box step-18"></div>
            <div className="drum-box step-19"></div>
            <div className="drum-box fourth step-20"></div>
            <div className="drum-box first step-21"></div>
            <div className="drum-box step-22"></div>
            <div className="drum-box step-23"></div>
            <div className="drum-box fourth step-24"></div>
            <div className="drum-box first step-25"></div>
            <div className="drum-box step-26"></div>
            <div className="drum-box step-27"></div>
            <div className="drum-box fourth step-28"></div>
            <div className="drum-box first step-29"></div>
            <div className="drum-box step-30"></div>
            <div className="drum-box step-31"></div>
            <div className="drum-box last step-32"></div>
          </div>
          */
