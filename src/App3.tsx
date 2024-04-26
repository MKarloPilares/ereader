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
  const [audio, setAudio] = useState(null);
  const [post, setPost] = useState<any[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [indexCheck, setIndexCheck] = useState(1);
  const images = [img1, img2, img3, img4, img5];
  const questions = ['What can you say about the net?', 'Where is the cat?','What does the fish have?', 'How many apples are there?', 'What is on the box?'];
  const answers = ['the net is wet', 'the cat is on the mat', 'the fish has big fins', 'there are six apples', 'the cat is on the box']
  const audios = [new Audio(aud1), new Audio(aud2), new Audio(aud3), new Audio(aud4), new Audio(aud5), new Audio(dirOral)];
  const [score, setScore] = useState(0);
  var points = 0;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/post');
      const jsonData = await response.json();
      setPost(jsonData.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const incrementIndex = () => {
    setIndexCheck(indexCheck => indexCheck +1);
  };

  const resetindex = () => {
    setIndexCheck(1);
  }

  const incrementScore = (points) => {
    setScore(score => score + points);
  }

  const resetScore = () => {
    setScore(0);
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

  const start = (element) => {
    element.play()
  }
  return (
      <body>
      <div className="App">
        {post.map((mess: any, index: number) =>
        <h2>
          <p key={index}>
              {mess.QuestNum}. {mess.Question}
          </p>
          <p>
            <span>
            {URL.createObjectURL(new Blob(mess.RecAud))}
            <img src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(mess.image1.data)))}`}/>       
            </span>
            <span>
              <button onClick={isListening ? stopSpeechRecognition : startSpeechRecognition}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
              </button>
              <p>{recognizedText === mess.Answer.toLowerCase() ? "Correct" : "Wrong"}</p>
            </span>
          </p>
        </h2>
    )}</div>
    </body>
  )
}

export default App