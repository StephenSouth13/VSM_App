// File: components/home/StatsSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const stats = [
  { label: 'Thành viên', value: '10,000+' },
  { label: 'Sự kiện tổ chức', value: '250+' },
  { label: 'Câu lạc bộ tham gia', value: '120+' },
];

const StatsSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thống Kê</Text>
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statBox}>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statBox: {
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10b981',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default StatsSection;
