import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import colors from '../Global/colors';
import { LinearGradient } from 'expo-linear-gradient';

const AddButton = ({ title, onPress }) => {
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
    width: '70%',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    color:'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default AddButton;
