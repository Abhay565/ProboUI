import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Sports from '../screens/Sports';
import PortFolio from '../screens/PortFolio';
import Wallet from '../screens/Wallet';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';  // Importing the icon set

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false, 
            tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = 'home-outline';
            } else if (route.name === 'search') {
              iconName = 'search-outline';
            } else if (route.name === 'sports') {
              iconName = 'football-outline';
            } else if (route.name === 'portfolio') {
              iconName = 'briefcase-outline';
            } else if (route.name === 'wallet') {
              iconName = 'wallet-outline';
            }

            // Return the appropriate icon
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#008b8b',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="search" component={Search} />
        <Tab.Screen name="sports" component={Sports} />
        <Tab.Screen name="portfolio" component={PortFolio} />
        <Tab.Screen name="wallet" component={Wallet} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
