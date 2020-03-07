import React from 'react';
import { StatusBar } from 'react-native';
import * as Colors from '../components/common/colors';
import HomePage from '../components/home'

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <HomePage />
    </>
  )
}

export default Home;
