import { StyleSheet, View, Button, TextInput } from 'react-native'
import React from 'react'

const AddTask = ({taskTitle, onHandlerTitle, taskDescription, onHandlerDescription, addTask}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput value={taskTitle} onChangeText={onHandlerTitle} placeholder='Insert Title' style={styles.textInput1} />
        <TextInput value={taskDescription} onChangeText={onHandlerDescription} placeholder='Insert Description' style={styles.textInput2} />
        <Button style={styles.buttonAdd} color="#613396" title='ADD' onPress={addTask} />
   </View>
  )
}

export default AddTask

const styles = StyleSheet.create({
    buttonAdd: {
        borderRadius: 10,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
      },
      textInput1: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '35%',
        marginBottom: 10,
        marginRight: 5,
      },
      textInput2: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '50%',
        marginBottom: 10,
        marginRight: 5,
      },
})