import { setDefaultResultOrder } from 'dns';
import React, { useState } from 'react';

interface voiceRecProps {
    answer: string;
}

const voiceRecButton: React.FC<voiceRecProps> = ({answer}) => {
    const[transcipt, setTranscript] = useState('');
    const[result, setResult] = useState('');
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = event => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
        compareTranscript(transcript);

        };
    recognition.start();
    };

    const compareTranscript = (transcript) => {
        if (transcript.toLowerCase() === 'hello'){
            setResult('Matched');
        } else{
            setResult('Not Matched');
        }
    };

    return (
        <div>
            <button onClick={voiceRecButton}>Start Speech Recognition</button>
        </div>
    )
}