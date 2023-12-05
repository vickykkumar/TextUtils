import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null);
 

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#210d42';
      showAlert('Dark Mode Enabled', 'success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('light Mode Enabled', 'success')
    }
  }

  const showAlert = (msg,type) =>{
    setAlert({
      msg,
      type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  
  return (
    <>
    <Router>
      <Navigation title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
