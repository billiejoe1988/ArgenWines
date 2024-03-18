import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import colors from '../Global/colors';
import { clearUser } from '../features/auth/authSlice';
import { deleteSession } from '../Data/db';
import { StatusBar } from 'expo-status-bar';

const Header = ({ title = "ArgenWines", navigation }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);
  const [modalVisible, setModalVisible] = useState(false);

  const onLogout = () => {
    setModalVisible(true);
    setTimeout(() => {
      dispatch(clearUser());
      deleteSession();
    }, 2000);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You are logging out...</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.leftIconsContainer}>
        {navigation && navigation.canGoBack() && ( 
          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="goldenrod" />
          </Pressable>
        )}
      </View>
      <Text style={styles.text}>{title}</Text>                
      <View style={styles.rightIconsContainer}>
        {idToken && (
          <TouchableOpacity style={styles.logoutIcon} onPress={onLogout}>
            <AntDesign name="logout" size={22} color="white"/>
          </TouchableOpacity>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 23,
    textAlign: 'center',
  },
});
