import React from 'react';
import "./Assessment.css";
import img1 from '../Images/Number1.png';

const Assessment = ({setCurrentPage}) => {
  const test = ['1', '2'];
    return (
      <body>
          <h1 className='mainHeader row'>Take the Challenges</h1>
        <div className='bigDiv'>
        {test.map((items: any, index: number) => (
          <>
          <div className='divStyle col'>  
            <img src={img1} alt="image"></img>
            <h2 className='row'>Read and Learn</h2>
            <button style={{position: 'absolute', bottom: '5px', right: '5px', padding: '5px'}} onClick={() => setCurrentPage('OralAssessment')}>START</button>
          </div>
          </>
        ))}</div>
      </body>
    );
  };

export default Assessment;
