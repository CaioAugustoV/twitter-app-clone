import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarBottom from './components/tabbar'

import Home from './pages/Home';

const Tab = createBottomTabNavigator();

const TabBar = (props) => <TabBarBottom {...props}/>

const AppNavigation = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen
      options={{
        tabBarLabel: 'home',
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'search',
      }}
      name="Search"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'bell',
      }}
      name="Notificacoes"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'mail',
      }}
      name="Menssage"
      component={Home}
    />
  </Tab.Navigator>
);

export default AppNavigation;
