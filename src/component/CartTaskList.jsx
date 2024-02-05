import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import React from 'react';

const CartTaskList = ({ onHandlerModalDelete, item, taskComplete }) => {
  return (
    <View style={styles.taskCard}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text2}>{item.description}</Text>
        <Text style={styles.text2}>{item.createdAt.toLocaleString()}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Switch value={item.completed} onValueChange={() => taskComplete(item.id)} />
        <Button title=" - " onPress={() => onHandlerModalDelete(item)} color={808080}/>
      </View>
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
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 12,
  },
});

export default CartTaskList;
