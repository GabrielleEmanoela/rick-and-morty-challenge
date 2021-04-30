import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import Routes from './routes'

export default function App() {
  return <>
    <StatusBar barStyle="light-content" backgroundColor="#00BCD4" />
    <Routes />
  </>
}