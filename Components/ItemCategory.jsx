import { Pressable, StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../Global/colors';
import ShadowBase from '../Wrapper/ShadowBase';
import { fontCollection } from '../Global/fonts';

const ItemCategory = ({ item, selectedCategoryState }) => {
  return (
    <Pressable onPress={()=>selectedCategoryState(item)}>
      <ShadowBase style={styles.container}>
          <Text style={styles.text}>{item}</Text>
      </ShadowBase>
    </Pressable>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.base,
    width:"80%",
    marginHorizontal:"10%",
    marginVertical:10,
    padding:20,
    alignItems:"center",
    borderRadius:5
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:fontCollection.JosefinSansBold,
    color: 'white',
    textAlign: 'center', 
  },
});
