import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import colors from '../Global/colors';
import { fontCollection } from '../Global/fonts';

const ProductByCategory = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: item.thumbnail }} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
      <TouchableOpacity style={styles.buyButton} onPress={() => console.log('Comprar')}>
        <Ionicons name="cart" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: colors.base,
    opacity:0.95,
    width: '90%',
    marginHorizontal: '5%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, 
  },
  title: {
    fontSize: 18,
    fontFamily: fontCollection.JosefinSansBold,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  img: {
    borderRadius: 5,
    width: 90,
    height: 90,
  },
  buyButton: {
    backgroundColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});
