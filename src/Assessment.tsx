import React from 'react';
import "../../App.css";
import Sidebar from './Components/Sidebar/sidebar';
import SearchTextField from './Components/TextFields/search';
import SearchButton from './Components/Buttons/search';
import img1 from './Components/Images/Number1.png';

const Assessment = () => {
  return (
    <body>
      <header>
        <SearchTextField/>
        <SearchButton/>
      </header>
      <h1 className='mainHeader'>Take the Challenges</h1>
      <div className='divStyle'>  
        <img src={img1} alt="image"></img>
        <h2>Oral Language Assessment</h2>
        Lorem ipsum dolor sit amet, con  et dolore magna aliqua
      </div>
      <div className='divStyle2'>  
        <img src={img1} alt="image"></img>
        <h2>Oral Language Assessment</h2>
        Lorem ipsum dolor sit amet, con  et dolore magna aliqua
      </div>
    </body>
  );
};

export default Assessment;
