// File: components/home/AboutSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Về Chúng Tôi</Text>
      <Text style={styles.description}>
VSM không chỉ là một giải chạy thường niên dành cho học sinh, sinh viên, mà còn là sân chơi của những bạn trẻ đam mê chạy bộ từ các trường đại học như: ĐH Kinh tế TP.HCM, UEF, ĐH Sư phạm, ĐH Văn Lang,… Đây là nơi bạn không chỉ thử sức qua từng cự ly chạy – mỗi cự ly là một thử thách, một cơ hội để bứt phá giới hạn bản thân – mà còn được rèn luyện ý chí, nâng cao sức khỏe và kết nối cộng đồng.      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111827',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
});

export default AboutSection;