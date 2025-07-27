// File: components/home/HeroSection.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cộng Đồng Thể Thao Việt Nam</Text>
      <Text style={styles.subtitle}>
        Nơi kết nối, phát triển và lan tỏa tinh thần thể thao trong cộng đồng.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Khám phá thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 24,
    backgroundColor: '#059669',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#e0f2f1',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 999,
  },
  buttonText: {
    color: '#059669',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HeroSection;