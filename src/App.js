import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import About from './components/About'
import UploadInput from './components/UploadInput'
import UploadsContainer from './components/Containers/UploadsContainer';
import Top from './components/Top'
import Home from './components/Home'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>

    <div className="App">  
    <button onClick={themeToggler}>Switch Theme</button>
     
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
      </>
    </ThemeProvider>
  );
}

export default App;
