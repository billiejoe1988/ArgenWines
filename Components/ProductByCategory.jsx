import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../Global/colors';
import { fontCollection } from '../Global/fonts';

const ProductByCategory = ({ item, navigation }) => {
  const handlePress = () => {
    navigation.navigate("ProductDetail", { productId: item.id });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={{ uri: item.thumbnail }} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ProductByCategory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.base,
    opacity: 0.95,
    width: '90%',
    marginHorizontal: '5%',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'goldenrod',
    elevation: 2,
  },
  imageContainer: {
    width: '100%', 
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden', 
  },
  textContainer: {
    padding: 10, 
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontFamily: fontCollection.JosefinSansBold,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 20,
    color: 'gold',
    marginTop: 5,
  },
  img: {
    width: '100%', 
    height: 150,
    borderRadius: 5,
  },
});
