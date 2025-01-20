import './style.css';
// import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import handelinput from './firebse';


// const firebaseConfig = {
//   apiKey: "AIzaSyAGWo9OfrlTzojbQRCWrv9-IrewzIoC8P4",
//   authDomain: "chat-website-e3fd1.firebaseapp.com",
//   projectId: "chat-website-e3fd1",
//   storageBucket: "chat-website-e3fd1.firebasestorage.app",
//   messagingSenderId: "395292065661",
//   appId: "1:395292065661:web:c4125488884d2b788a9614",
//   measurementId: "G-M7D1P2DKL7"
// };


// webcamButton.onclick = async () => {
//   localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//   remoteStream = new MediaStream();

//   // Push tracks from local stream to peer connection
//   localStream.getTracks().forEach((track) => {
//     pc.addTrack(track, localStream);
//   });

//   // Pull tracks from remote stream, add to video stream
//   pc.ontrack = (event) => {
//     event.streams[0].getTracks().forEach((track) => {
//       remoteStream.addTrack(track);
//     });
//   };

//   webcamVideo.srcObject = localStream;
//   remoteVideo.srcObject = remoteStream;

//   callButton.disabled = false;
//   answerButton.disabled = false;
//   webcamButton.disabled = true;
// };

const handeltext = ()=>{
  let localStream = null;

  localStream = navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  remoteStream = new MediaStream();

  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  // Pull tracks from remote stream, add to video stream
  pc.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;

  callButton.disabled = false;
  answerButton.disabled = false;
  webcamButton.disabled = true;
}

const Video = () => {
  
  return (
    <div className="video">
      <h2>1. Start your Webcam</h2>
      <div className="videos">
        <span>
          <h3>Local Stream</h3>
          <video id="webcamVideo" autoPlay playsInline></video>
          {/* <video ref={webcamVideoRef} autoPlay playsInline></video> */}
        </span>
        <span>
          <h3>Remote Stream</h3>
          <video id="remoteVideo" autoPlay playsInline></video>
        </span>
      </div>

      <button id="webcamButton" onClick={handelinput}>Start webcam</button>
      {/* <button ref={webcamButtonRef} onClick={startWebcam}>Start Webcam</button> */}
      <h2>2. Create a new Call</h2>
      <button id="callButton" disabled>
        Create Call (offer)
      </button>

      <h2>3. Join a Call</h2>
      <p>Answer the call from a different browser window or device</p>

      <input id="callInput" />
      <button id="answerButton" disabled>
        Answer
      </button>

      <h2>4. Hangup</h2>

      <button id="hangupButton" disabled>
        Hangup
      </button>
    </div>
  );
}

export default Video 