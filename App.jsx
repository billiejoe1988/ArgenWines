import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';

const App = () => {

  const [modalVisible, setModalVisible]  = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {

    const newTask = {
      id: uuid.v4(),
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      title: taskTitle,
      description: taskDescription,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  };

  const onHandlerTitle = (t) => {
    setTaskTitle(t);
  };

  const onHandlerDescription = (t) => {
    setTaskDescription(t);
  };

  const onHandlerModalDelete = (task) => {
    setTaskSelected(task);
    setModalVisible(true);
  };
 
  const deleteTask  = () => {
    setTasks(tasks.filter(t => t.id !== taskSelected.id));
    setModalVisible(false);
  };

  return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput value={taskTitle} onChangeText={onHandlerTitle} placeholder='Insert Title' style={styles.textInput1} />
          <TextInput value={taskDescription} onChangeText={onHandlerDescription} placeholder='Insert Description' style={styles.textInput2} />
          <Button style={styles.buttonAdd} color="#613396" title='ADD' onPress={addTask} />
        </View>
        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.taskCard}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.description}</Text>
                <Button  style={styles.buttons} title='DEL' onPress={() => onHandlerModalDelete(item)} color="#808080" />
              </View>
            )}
          />
          <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
            animationType="slide"
          >
            <View style={styles.modalContent}>
              <Text  >Are you sure you want to delete this item? {taskSelected.title} </Text>
              <View style={styles.modalButtonsContainer}>
                <Button style={styles.modalButton} title='Yes' onPress={deleteTask} color="#7C43BD" />
                <Button style={styles.modalButton} title='No' onPress={() => setModalVisible(false)} color="#7C43BD" />
              </View>
            </View>
          </Modal>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 33,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  tasksContainer: {
    flex: 1,
    width: '90%',
  },
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  text2: {
   fontSize: 12,
  },
  modalContent: {
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
  buttonAdd: {
    borderRadius: 10,
  }
});

export default App;
