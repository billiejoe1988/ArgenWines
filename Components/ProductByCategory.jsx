import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Global/colors';
import { fontCollection } from '../Global/fonts';

const ProductByCategory = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:item.thumbnail}} resizeMode="cover"/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.id}>{item.id}</Text>
    </View>
  )
}

export default ProductByCategory

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.base,
    width:"80%",
    marginHorizontal:"5%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontFamily: fontCollection.JosefinSansBold,
    width:"60%",
    fontWeight: 'bold',
    color: '#333',
  },
  id: {
    fontSize: 16,
    color: '#666',
  },
  img:{
    borderRadius:5,
    width:90,
    height:90,
  }
})
