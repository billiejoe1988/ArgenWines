import React from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import CartTaskList from './CartTaskList';

const Flate = ({ tasks, onHandlerModalDelete }) => {
  return (
    <View style={styles.tasksContainer}>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartTaskList 
            onHandlerModalDelete={onHandlerModalDelete}
            item={item}
            taskComplete={taskComplete}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    width: '90%',
  },
});

export default Flate;
