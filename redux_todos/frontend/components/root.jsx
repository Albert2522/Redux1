import React from 'react';
import { Provider } from 'react-redux'; // v2
import App from './app';


const Root = ({ store }) => {
  return (<Provider store={store}>
    <App />
  </Provider>);
  };

export default Root;
