import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import UploadReducer from './components/Reducers/UploadReducer';
import './index.css';
import App from './App';

const store = createStore(
    UploadReducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(thunk)
);
 

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
      
      
  ,
  document.getElementById('root')
);




