import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


import HistoriaPantalla from "./src/containers/HistoriaPantalla";
import PanesPantalla from "./src/containers/PanesPantalla";


export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'HISTORIA') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'PANES') {
                iconName = focused ? 'paw' : 'paw-outline';
              }
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'grey',
          })}
        >
        <Tab.Screen options={{ headerShown: false }} name="HISTORIA" component={HistoriaPantalla} />
        <Tab.Screen options={{ headerShown: false }} name="PANES" component={PanesPantalla} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}