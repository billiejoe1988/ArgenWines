import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../Data/categories.json' 
import ItemCategory from './ItemCategory'

const Categories = ({ selectedCategoryState }) => {
  return (
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ItemCategory item={item} selectedCategoryState={selectedCategoryState} />
        )} 
      />
  )
}

export default Categories;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: "100%",
  }
});
