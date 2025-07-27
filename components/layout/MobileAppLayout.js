// File: components/layout/MobileAppLayout.js
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const tabs = [
  { name: 'Trang chủ', icon: 'home-outline', route: 'Home' },
  { name: 'Sự kiện', icon: 'calendar-outline', route: 'Events' },
  { name: 'Tin tức', icon: 'newspaper-outline', route: 'News' },
  { name: 'Tài khoản', icon: 'person-outline', route: 'Profile' },
];

export default function MobileAppLayout({ children }) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => {
          const isActive = route.name === tab.route;
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              onPress={() => navigation.navigate(tab.route)}
            >
              <Ionicons
                name={tab.icon}
                size={24}
                color={isActive ? '#10b981' : '#999'}
              />
              <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                {tab.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingBottom: 80, // chừa chỗ cho tab bar
    backgroundColor: '#ffffff',
    minHeight: '100%',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 3,
    elevation: 5,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
  },
  tabTextActive: {
    color: '#10b981',
    fontWeight: '600',
  },
});
