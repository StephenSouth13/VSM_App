import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../components/CustomInput';
import colors from '../theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onRegister = async () => {
    if (password !== confirm) {
      Alert.alert('Lỗi', 'Mật khẩu không khớp');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Lỗi đăng ký', error.message);
    }
  };

  return (
    <LinearGradient colors={['#2193b0', '#6dd5ed']} style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>

      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput placeholder="Mật khẩu" value={password} setValue={setPassword} secureTextEntry />
      <CustomInput placeholder="Xác nhận mật khẩu" value={confirm} setValue={setConfirm} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={onRegister}>
        <Text style={styles.buttonText}>Tạo tài khoản</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: colors.text, textAlign: 'center', marginBottom: 24 },
  button: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  link: { textAlign: 'center', marginTop: 12, color: colors.primary, fontWeight: '500' },
});

export default RegisterScreen;
