import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import { View, Text } from 'react-native'
import styled from 'styled-components/native';

const Container = styled.View(props => ({
  backgroundColor: '#000',
  flexDirection: 'row'
}));

const TextTab = styled.Text(props => ({
  color: '#fff',
}));

const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation}) => (
  <Container>
    <TextTab>TESTE</TextTab>
  </Container>
)

const AppNavigation = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen
      options={{
        tabBarLabel: 'Home',
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Visitante',
      }}
      name="menu"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Comprar',
      }}
      name="Cart"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Scanner',
      }}
      name="MyList"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarLabel: 'Mais',
      }}
      name="Account"
      component={Home}
    />
  </Tab.Navigator>
);

export default AppNavigation;
