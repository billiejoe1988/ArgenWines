import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDeleteTask from './src/component/ModalDeleteTask';
import AddTask from './src/component/AddTask';
import Flate from './src/component/Flate';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      createdAt: new Date(),
      updatedAt: new Date().toLocaleString(),
      completed: false,
      title: taskTitle,
      description: taskDescription,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  };

  const taskComplete = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) return { ...task, ...{completed: !task.completed }};
      return task;
    }));
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

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== taskSelected.id));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <AddTask
        onHandlerTitle={onHandlerTitle}
        onHandlerDescription={onHandlerDescription}
        taskTitle={taskTitle}
        addTask={addTask}
        taskDescription={taskDescription}
      />
      <Flate
        tasks={tasks}
        onHandlerModalDelete={onHandlerModalDelete}
        taskComplete={taskComplete}
      />
      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        setModalVisible={setModalVisible}
      />
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
});

export default App;
