import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const CartTaskList = ({ onHandlerModalDelete, item }) => {
  return (
    <View style={styles.taskCard}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text2}>{item.description}</Text>
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
  text: {
    fontSize: 20,
  },
  text2: {
    fontSize: 12,
  },
});

export default CartTaskList;
