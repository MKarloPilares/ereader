import React from 'react';
import "./DashBoard.css";

import img1 from '../Images/Number1.png';

const DashBoard = ({setCurrentPage}) => {
  const test = ['1', '2'];
  return (
    <body>
        <h1 className='mainHeader row'>E-Readers for Early Readers</h1>
      <div className='bigDiv'>
      {test.map((items: any, index: number) => (
        <>
        <div className='divStyle col'>  
          <img src={img1} alt="image"></img>
          <h2 className='row'>Read and Learn</h2>
          Lorem ipsum dolor sit amet, 
          <button style={{position: 'absolute', bottom: '5px', right: '5px', padding: '5px'}} onClick={() => setCurrentPage('Assessment')}>START</button>
        </div>
        </>
      ))}</div>
    </body>
  );
};

export default DashBoard;
