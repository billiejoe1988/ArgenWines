import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useGetProductQuery } from '../app/services/shop';
import { useEffect, useState } from 'react';
import colors from '../Global/colors';
import Counter from '../Components/Counter'

const ProductDetail = ({ route }) => {
  const dispatch = useDispatch()
  const {productId} = route.params
  const {data:product,isLoading} = useGetProductQuery(productId)
  
  if(isLoading) return <View><Text>loading...</Text></View>

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={false}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{ uri: product?.images ? product.images[0] : null }}
            resizeMode='cover'
          />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text>{product?.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product?.price}</Text>
            <Counter 
            initialValue={1}
            product={product} 
            textButton="Cart" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ProductDetail;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%"
  },
  image: {
    width: "100%",
    height: 300
  },
  containerText: {
    gap: 25,
    paddingHorizontal: 5,
    paddingVertical: 25
  },
  containerPrice: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 20,
    color: 'goldenrod',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 30
  },
  buyNow: {
    backgroundColor: colors.base,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: 'goldenrod',
  },
  buyNowText: {
    color: "white",
    fontSize: 20,
  }
});
