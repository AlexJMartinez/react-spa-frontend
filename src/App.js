import React from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About'
import UploadInput from './components/UploadInput'
import UploadsContainer from './components/Containers/UploadsContainer';
import Top from './components/Top'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  
  return (

    <div className="App">   
    <BrowserRouter>
          <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/upload" component={UploadInput}/>
          <Route exact path="/uploads" component={UploadsContainer}/>
          <Route path="/top" component={Top}/>
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
