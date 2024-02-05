import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const ModalDeleteTask = ({taskSelected, deleteTask, modalVisible, setModalVisible}) => {

  return (
        <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
    >
        <View style={styles.modalContent}>
        <Text  >Are you sure you want to delete this item? {taskSelected.title} </Text>
        <View style={styles.modalButtonsContainer}>
            <Button style={styles.modalButton} title='Delete' onPress={deleteTask} color="#7C43BD" />
            <Button style={styles.modalButton} title='Back' onPress={() => setModalVisible(false)} color="#7C43BD" />
        </View>
        </View>
    </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create(
    {modalContent: {
        flex: 1,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalButtonsContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%', 
        borderRadius: 10,
      },
      modalButton: {
        margin: 5,
        padding:5,
        width: '40%',
        borderRadius: 10,
      },
    }
)