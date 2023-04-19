import React from 'react';
import  SpeechRecognition,  { useSpeechRecognition } from 'react-speech-recognition';
import "./Diaphone.css";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  if (!browserSupportsContinuousListening) {
    return <span>Browser doesn't Contionus speech recognition.</span>
  }else {
   const  startSpeech= ()=>{
      SpeechRecognition.startListening({ continuous: true })
    }
    
    return (
      <div>
        <h1> Is chitti is listening : {listening ? 'Yes' : 'No'}</h1>
        <p> if Yes please tell something Chitti will write</p>
        <button onClick={startSpeech}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <div className='transcript'>
          {transcript}
          </div>
      </div>
    );
  }

};
export default Dictaphone;