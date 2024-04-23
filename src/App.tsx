import React, { useState, useEffect } from "react";
import "./App.css";
import studAudio from './Components/Images/Audio.png';
import img1 from './Components/Images/Number1.png';
import img2 from './Components/Images/Number2.png';
import img3 from './Components/Images/Number3.png';
import img4 from './Components/Images/Number4.png';
import img5 from './Components/Images/Number5.png';
import RecAudio from './Components/Images/RecordedAudio.png'
import aud1 from './Components/Audio/Oral1.m4a';
import aud2 from './Components/Audio/Oral2.m4a';
import aud3 from './Components/Audio/Oral3.m4a';
import aud4 from './Components/Audio/Oral4.m4a';
import aud5 from './Components/Audio/Oral5.m4a';
import dirOral from './Components/Audio/DirOral.m4a';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [indexCheck, setIndexCheck] = useState(1);
  const images = [img1, img2, img3, img4, img5];
  const questions = ['What can you say about the net?', 'Where is the cat?','What does the fish have?', 'How many apples are there?', 'What is on the box?'];
  const answers = ['the net is wet', 'the cat is on the mat', 'the fish has big fins', 'there are six apples', 'the cat is on the box']
  const audios = [new Audio(aud1), new Audio(aud2), new Audio(aud3), new Audio(aud4), new Audio(aud5), new Audio(dirOral)];
  const [score, setScore] = useState(0);
  var points = 0;

  const incrementIndex = () => {
    setIndexCheck(indexCheck => indexCheck +1);
  };

  const incrementScore = (points) => {
    setScore(score => score + points);
  }


  const startSpeechRecognition = () => {
    setIsListening(true);
    const recognition = new window.webkitSpeechRecognition(); 
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
    };
    recognition.start();
  };

  const stopSpeechRecognition = () => {
    setIsListening(false);
    recognition.stop();
  };

  const start = (index) => {
    audios[index-1].play()
  }

  return (
<body>
    <header>
        <h1>Oral Language Assessment</h1>
    </header>
        <div>
          {indexCheck <= questions.length ? (
          <main>
            <p><b> Direction: Describe the picture using the words in the box. </b></p>
            <p>{indexCheck}. {questions[indexCheck-1]}</p>
            <div id="image-section">
                <img src={images[indexCheck-1]}/>
            </div>

                <img class="Direction" src={RecAudio} onClick={() => start(6)}/>
                <audio id="audio1" src=".mp3"></audio>

                <img class="RecAudio" src={RecAudio} onClick={() => start(indexCheck)}/>

                <img class="StudAudio" src={studAudio} onClick={isListening ? stopSpeechRecognition : startSpeechRecognition}/>
                {answers[indexCheck-1] === recognizedText ? (points = points+1) : (points = points)}
                <button class="NextButton" onClick={() => {incrementScore(points); incrementIndex();}}>NEXT</button>
          </main>):(
            <div>
              <h1>{score}</h1>
            </div>
        )}</div>
</body>
  );
}

export default App