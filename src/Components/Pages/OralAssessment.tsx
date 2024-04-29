import React, { useState, useEffect } from "react";
import studAudio from '../Images/Audio.png';
import img1 from '../Images/Number1.png';
import img2 from '../Images/Number2.png';
import img3 from '../Images/Number3.png';
import img4 from '../Images/Number4.png';
import img5 from '../Images/Number5.png';
import RecAudio from '../Images/RecordedAudio.png'
import aud1 from '../Audio/Oral1.m4a';
import aud2 from '../Audio/Oral2.m4a';
import aud3 from '../Audio/Oral3.m4a';
import aud4 from '../Audio/Oral4.m4a';
import aud5 from '../Audio/Oral5.m4a';
import dirOral from '../Audio/DirOral.m4a';
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function OralAssessment() {
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

  const start = (index) => {
    audios[index-1].play()
  }
  return (
  <Container>
        <div>
          {indexCheck <= questions.length ? (
          <div style={{position: "fixed", left: '500px', bottom: '100px', width: '1300px'}}>
            <Row>
            <Col class="col-md-10"> <h2 style={{width: '1000px'}}>Direction: Describe the picture using the words in the box.
               <Image src={RecAudio} onClick={() => start(6)} rounded style={{height: '60px', width:'70px'}}></Image></h2> </  Col>
            </Row>
            <Row>
              <Col class="col-md-10"><h3>{indexCheck}. {questions[indexCheck-1]}<Image src={RecAudio} onClick={() => start(indexCheck)} rounded style={{height: '60px', width:'70px'}}/></h3></Col>
            </Row>
            <Row>
              <Col><Image src={images[indexCheck-1]}></Image></Col>
              <Col><Image src={studAudio} onClick={isListening ? stopSpeechRecognition : startSpeechRecognition} rounded style={{width: '400px', height: '400px'}}></Image></Col>
            </Row>
            <Row>
              <Button variant='success' onClick={() => {answers[indexCheck-1] === recognizedText ? (points = points+1) : (points = points); incrementScore(points); incrementIndex();}}>NEXT</Button>
            </Row>
          </div>
          ):(
          <div style={{position: "fixed", left: '300px', bottom: '150px', width: '1300px'}}>
          <div>
              <h2 style={{textAlign: "center", fontSize: "100px"}}> CONGRATULATIONS!</h2>
                <h1 style={{textAlign: "center", padding: "50px"}}> {score} </h1>
                <h2 style={{textAlign: "center", paddingBottom: "120px"}}> You have Conquered the Oral Language Assessment!</h2>
              </div>
        <Row>
        <Button variant="success" onClick={() => {resetScore(); setRecognizedText(""); resetindex();}}>Finish</Button>
        </Row>
        </div>)}
        </div>
</Container>
  );
}

export default OralAssessment