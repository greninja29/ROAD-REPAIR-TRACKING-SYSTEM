import React,{/*{useState,useEffect} */} from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ClerkPage from './components/ClerkPage';
import SupervisorPage from './components/SupervisorPage';
import CommunityOfficerPage from './components/CommunityOfficerPage';
import Home from './components/Home';

function App() {
  return (
      <Router>
          <LoginPage/>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/clerkPage' element={<ClerkPage/>} />
            <Route path='/supervisorPage' element={<SupervisorPage/>} />
            <Route path='/officerPage' element={<CommunityOfficerPage/>} />  
          </Routes>

      </Router>

  );
}

export default App;
