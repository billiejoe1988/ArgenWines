import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import ProductByCategory from '../Components/ProductByCategory'
import Search from '../Components/Search'
import { useGetProductsByCategoryQuery } from '../app/services/shop'

const ProductsByCategory = ({navigation,route}) => {

  const {categorySelected} = route.params
  const {data:products} = useGetProductsByCategoryQuery(categorySelected)
  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }

  useEffect(() => {
    setProductsFiltered(products)
    if (keyword) setProductsFiltered(products.filter(product => {
        const productTitlelower = product.title.toLowerCase()
        const keywordLower = keyword.toLowerCase();
        return productTitlelower.includes(keywordLower)
    }))
 }, [categorySelected, keyword, products]);

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