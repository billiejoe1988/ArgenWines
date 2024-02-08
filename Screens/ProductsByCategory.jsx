import { FlatList, StyleSheet, Text, View } from 'react-native'
import products from '../Data/products.json'
import Header from '../Components/Header'
import { useEffect, useState } from 'react'
import ProductByCategory from '../Components/ProductByCategory'
import Search from '../Components/Search'

const ProductsByCategory = ({categorySelected}) => {

  const [productsFiltered,setProductsFiltered] = useState([])
  const [keyword,setKeyword] = useState("")

  const handlerKeyword = (k) => {
    setKeyword(k)
  }
  useEffect(()=>{
   if(categorySelected)  setProductsFiltered(products.filter(product => product.category === categorySelected))
   if(keyword) setProductsFiltered(productsFiltered.filter(product => {
    const productTitleLower = product.title.toLowerCase()
    const keywordLower = keyword.toLowerCase()
    return productTitleLower.includes(keywordLower)
  }))
  },[categorySelected,keyword])


  return (
    <>
        <Header title={categorySelected}/>
        <Search handlerKeyword={handlerKeyword}/>
        <FlatList
          data={productsFiltered}
          keyExtractor={item => item.id}
          renderItem={({item})=> <ProductByCategory item={item}/>}
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