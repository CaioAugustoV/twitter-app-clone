import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import { View, Text } from 'react-native'

const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation}) => (
  <View>
    <Text>TESTE</Text>
  </View>
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
