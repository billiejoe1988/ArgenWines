import React from 'react';
import { StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native';
import { useGetCategoriesQuery } from '../app/services/shop';
import ItemCategory from './ItemCategory';

const Categories = ({ navigation }) => {
  const {data:categories} = useGetCategoriesQuery()
  const { width, height } = useWindowDimensions();

  return (
    <FlatList
      data={categories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ItemCategory item={item} navigation={navigation} />}
      horizontal={width > height} 
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={true} 
    />
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
