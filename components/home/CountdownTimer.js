// File: components/home/CountdownTimer.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountdownTimer = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sự kiện sắp tới trong:</Text>
      <View style={styles.timerContainer}>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <View key={unit} style={styles.timeBox}>
            <Text style={styles.timeValue}>{value}</Text>
            <Text style={styles.timeLabel}>{unit}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  timerContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  timeBox: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 60,
  },
  timeValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#00796b',
  },
  timeLabel: {
    fontSize: 12,
    color: '#004d40',
  },
});

export default CountdownTimer;