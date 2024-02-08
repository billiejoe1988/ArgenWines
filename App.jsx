import { StyleSheet } from 'react-native'
import React, { useState } from 'react';
import Home from './Screens/Home'
import ProductsByCategory from './Screens/ProductsByCategory'
import { useFonts } from 'expo-font';
import { fontCollection } from './Global/fonts';

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected, setCategorySelected]= useState("")

  if(!fontsLoaded) return null

  const selectedCategoryState = (category) => {
    setCategorySelected(category)
  }
  
  return (
    <>
      {categorySelected ? 
              <ProductsByCategory categorySelected={categorySelected} />
              :
              <Home selectedCategoryState={selectedCategoryState}/>
      }
    </>
  )
}

export default App

const styles = StyleSheet.create({

})