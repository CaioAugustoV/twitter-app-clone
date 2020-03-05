import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './pages/Home'

const { Navigator, Screen } = createStackNavigator()

const Routes = () => (
  <NavigationContainer>
    <Navigator headerMode="none" initialRouteName="Home" >
      <Screen
        name="Home"
        component={Home}
      />
    </Navigator>
  </NavigationContainer>
)


export default Routes
