import React from 'react'
import { StatusBar } from 'react-native'
import Routes from './src/Routes'


const App = () => (
  <>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <Routes />
  </>
)

export default App
