// File: components/home/CTASection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CTASection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sẵn sàng tham gia?</Text>
      <Text style={styles.description}>
        Cùng nhau lan tỏa tinh thần thể thao và xây dựng cộng đồng khỏe mạnh.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tham gia ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#10b981',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#e0f2f1',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#10b981',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CTASection;
