import React from 'react';
import { StatusBar } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './store'
import Routes from './routes';
import './config/Reactotron';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00BCD4" />
      <Routes />
    </>
  );
}
