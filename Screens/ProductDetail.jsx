import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import products from '../Data/products.json';
import { useEffect, useState } from 'react';
import colors from '../Global/colors';
import Header from '../Components/Header';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productFound = products.find(product => product.id === productId);
    setProduct(productFound);
  }, [productId]);

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
            <Text>{product.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <TouchableOpacity onPress={() => console.log('Buy')} style={styles.buyNow}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
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
    color: 'goldenrod'
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
