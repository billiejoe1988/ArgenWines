import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import colors from '../Global/colors';
import { clearUser } from '../features/auth/authSlice';
import { deleteSession } from '../Data/db';
import { StatusBar } from 'expo-status-bar';

const Header = ({ title = "ArgenWines", navigation }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);
  const showBackButton = navigation && navigation.canGoBack();

  const onLogout = () => {
    dispatch(clearUser());
    deleteSession();
  }

  return (
    <View style={styles.container}>
      {showBackButton && ( 
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="goldenrod" />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>                
      <View style={styles.rightIconsContainer}>
        {idToken && (
          <Pressable style={styles.logoutIcon} onPress={onLogout}>
            <AntDesign name="logout" size={22} color="white"/>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  rightIconsContainer: {
    flexDirection: 'row', 
  },
  logoutIcon: {
    padding: 10,
    marginTop: 12,
  }
});
