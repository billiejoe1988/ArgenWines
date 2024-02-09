import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Global/colors';

const Header = ({ title = "ArgenWines", onPressBack }) => {
  const handlePressBack = () => {
    console.log("Back");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onPressBack || handlePressBack}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.base,
        flexDirection: 'row',
        height: 80,
        width: '100%',
        alignItems: 'center', 
    },
    text: {
        fontSize: 25,
        color: 'white',
        marginLeft: 10,
        marginTop:10, 
    },
    backButton: {
        padding: 10,
        marginTop:12, 
    }
});
