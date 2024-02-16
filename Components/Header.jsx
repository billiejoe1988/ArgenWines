import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Global/colors';

const Header = ({ title = "ArgenWines", navigation }) => {
  const showBackButton = navigation && navigation.canGoBack();

  return (
    <View style={styles.container}>
      {showBackButton && ( 
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="goldenrod" />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    height: 80,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  backButton: {
    padding: 10,
    marginTop: 12,
  }
});
