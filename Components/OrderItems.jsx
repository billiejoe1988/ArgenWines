import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import colors from '../Global/colors';
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({ order }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('OrderDetail', { order });
  };

  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <View style={styles.textItem}>
          <Text style={styles.text}>OrderID: </Text>
          <Text style={[styles.text, styles.goldText]}>{order.id}</Text>
        </View>
        <View style={styles.textItem}>
          <Text style={styles.text}>Date: </Text>
          <Text style={[styles.text, styles.goldText]}>{order.createdAt}</Text>
        </View>
        <View style={styles.textItem}>
          <Text style={styles.text}>Total: </Text>
          <Text style={[styles.text, styles.goldText]}>$ {order.total}</Text>
        </View>
      </View>
      <Pressable onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>See Details</Text>
      </Pressable>
    </View>
  );
}

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.lightGray,
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    borderColor: colors.base,
    elevation: 2, 
    shadowColor: colors.base, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, 
    width:'80%',
    marginLeft:40,
  },
  textContainer: {
    marginBottom: 10,
  },
  textItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  goldText: {
    color: 'gold',
  },
  button: {
    backgroundColor: colors.base,
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    fontSize: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
