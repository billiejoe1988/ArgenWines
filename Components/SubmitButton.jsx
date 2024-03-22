import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import colors from './../Global/colors';
import { LinearGradient } from 'expo-linear-gradient';

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <LinearGradient
        colors={[colors.gold, colors.base]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden', 
    marginTop: 20,
  },
  gradient: {
    padding: 12,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
});

export default SubmitButton;
