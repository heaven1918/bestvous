import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
// import Tab from './pages/tabletest/table'
import store from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>  
  ,
  document.getElementById('root')
);
