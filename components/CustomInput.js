import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  input: {
    height: 48,
    color: colors.text,
  },
});

export default CustomInput;
