//screens/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import colors from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const onSendReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Thành công', 'Email đặt lại mật khẩu đã được gửi.');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Lỗi', error.message);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={styles.title}>Quên mật khẩu</Text>
      <Text style={styles.description}>Nhập email để nhận hướng dẫn đặt lại mật khẩu.</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <TouchableOpacity style={styles.button} onPress={onSendReset}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text, textAlign: 'center', marginBottom: 16 },
  description: { textAlign: 'center', color: colors.text, marginBottom: 20 },
  button: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { textAlign: 'center', marginTop: 12, color: colors.primary, fontWeight: '500' },
});

export default ForgotPasswordScreen;
