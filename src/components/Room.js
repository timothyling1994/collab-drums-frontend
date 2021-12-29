import '../App.css';
import {useState,useEffect} from "react";
import uniqid from "uniqid";

import vinyl_svg from '../public/vinyl.svg';
import play_svg from '../public/play.svg';
import pause_svg from '../public/pause.svg';
import trash_svg from '../public/trash.svg';



function Room(props) {

  const [roomId,setRoomId] = useState(null);

  const initializeRoom = () => {


  };

  useEffect(() => {
    //const { id } = props.match.params;
    //setRoomId(id);
    //initializeRoom(id);
  },[]);



  return (
    <div className="Room">
      <div id="room-title">Collab Drums</div>
      <div id="main-container">
        <div id="message-container"></div>
          <form id="send-container">
            <input type="text" id="message-input"/>
            <button type="submit" id="send-button">Send</button>
          </form>
        </div>
        <div id="drum-grid">
          <div id="control-panel">
            <img className="control-btn" src={play_svg} alt="play button"></img>
            <img className="control-btn" src={pause_svg} alt="pause button"></img>
            <img className="control-btn" src={trash_svg} alt="trash button"></img>
            <input type="number" id="bpm" value="120"/>
          </div>
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

        </div>
      
    </div>
  );
}

export default Room;
