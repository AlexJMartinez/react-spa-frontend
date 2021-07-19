import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About'
import UploadInput from './components/UploadInput'
import UploadsContainer from './components/Containers/UploadsContainer';
import Top from './components/Top'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';


function App() {
  
  return (

    <div className="App">   
    <BrowserRouter>
        <Navbar/>
        <Route path="/"/>
        <Route path="/about" component={About}/>
        <Route path="/upload" component={UploadInput}/>
        <Route path="/uploads" component={UploadsContainer}/>
        <Route path="/top" component={Top}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
