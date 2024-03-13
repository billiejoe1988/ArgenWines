import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux"
import colors from '../Global/colors';
import clearUser from '../features/auth/authSlice'
import { deleteSession } from '../Data/db'

const Header = ({ title = "ArgenWines", navigation }) => {

  const idToken = useSelector((state) => state.auth.idToken)
  const showBackButton = navigation && navigation.canGoBack();

  const onLogout = () => {
    dispatch(clearUser())
    deleteSession()
}

  return (
    <View style={styles.container}>
      {showBackButton && ( 
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="goldenrod" />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>                
      {idToken && (
                    <Pressable style={styles.logoutIcon} onPress={onLogout}>
                     <AntDesign name="logout" size={30} color="black"/>
                    </Pressable>)}
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
