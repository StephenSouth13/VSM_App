import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import NewsScreen from '../screens/NewsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = 'home';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Sự kiện') {
            return <MaterialIcons name="event" size={size} color={color} />;
          } else if (route.name === 'Tin tức') {
            return <FontAwesome5 name="newspaper" size={size} color={color} />;
          } else if (route.name === 'Tài khoản') {
            return <Ionicons name="person" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#009966',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 65,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#fff',
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Sự kiện" component={EventsScreen} />
      <Tab.Screen name="Tin tức" component={NewsScreen} />
      <Tab.Screen name="Tài khoản" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
