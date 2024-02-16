import { FlatList, StyleSheet, Text, View } from 'react-native'
import products from '../Data/products.json'
import { useEffect, useState } from 'react'
import ProductByCategory from '../Components/ProductByCategory'
import Search from '../Components/Search'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(() => {
    let filteredProducts = products;
    if (categorySelected) {
        filteredProducts = filteredProducts.filter(product => product.category === categorySelected);
    }
    if (keyword) {
        const keywordLower = keyword.toLowerCase();
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(keywordLower));
    }
    setProductsFiltered(filteredProducts);
}, [categorySelected, keyword]);



  return (
    <>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory navigation={navigation}  item={item}/>}
        />
    </>
  )
}

export default ProductsByCategory;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
  }
});