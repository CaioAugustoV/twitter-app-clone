import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation'

import Home from './pages/Home';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator headerMode="none" initialRouteName="AppNavigation">
      <Screen name="AppNavigation" component={AppNavigation} />
      <Screen name="Home" component={Home} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
