import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React from 'react';

const CartTaskList = ({ onHandlerModalDelete, item, taskComplete }) => {
  return (
    <View style={styles.taskCard}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.description}</Text>
        <Text style={styles.text2}>{item.createdAt.toLocaleString()}</Text>
        <Switch value={item.complete} onValueChange={() => taskComplete(item.id)} />
      </View>
      <Button style={styles.buttons} title=' - ' onPress={() => onHandlerModalDelete(item)} color="#808080" />
    </View>
  );
};

const styles = StyleSheet.create({
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
  textContainer: {
    flex: 1,
    alignSelf: 'flex-start', 
  },
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 12,
  },
  buttons: {
    alignSelf: 'flex-end', 
  },
});

export default CartTaskList;
