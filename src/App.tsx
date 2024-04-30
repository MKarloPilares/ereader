import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import SearchTextField from './Components/TextFields/search';
import SearchButton from './Components/Buttons/search';
import Sidebar from './Components/Sidebar/sidebar';
import DashBoard from './Components/Pages/DashBoard';
import Assessment from './Components/Pages/Assessment';
import OralAssessment from './Components/Pages/OralAssessment';const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('DashBoard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <Container fluid>
    <Sidebar setCurrentPage={setCurrentPage} sendToggle={toggleSidebar} />
    <header>
      <SearchTextField/>
      <SearchButton/>
      </header>
<Container fluid>
      <div className="content">
        {currentPage === 'DashBoard' && <DashBoard setCurrentPage={setCurrentPage}/>}
        {currentPage === 'Assessment' && <Assessment setCurrentPage={setCurrentPage}/>}
        {currentPage === 'OralAssessment' && <OralAssessment />}
      </div>
    </Container>
 </Container>
  );
};

export default App;
