import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import colors from '../Global/colors';
import AddButton from './AddButton'; 
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({ order }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('OrderDetail', { order });
  };

  return (
    <Pressable onPress={handlePress} style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {order.createdAt}
        </Text>
        <Text style={styles.text2}>$ {order.total}</Text>
      </View>
      <AddButton title="See Detail" onPress={handlePress} />
    </Pressable>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: colors.base,
    elevation: 2, 
    shadowColor: colors.base, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4, 
  },
  textContainer: {
    flex: 1, 
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
    fontFamily: 'JosefinSans-Bold',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: 'gold',
    fontFamily: 'JosefinSans-Bold',
  },
});
