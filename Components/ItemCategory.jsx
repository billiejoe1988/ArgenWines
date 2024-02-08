import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../Global/colors';
import ShadowBase from '../Wrapper/ShadowBase';
import { fontCollection } from '../Global/fonts';

const ItemCategory = ({ item, selectedCategoryState }) => {
  return (
    <Pressable onPress={() => selectedCategoryState(item)}>
      <ShadowBase>
        <View style={styles.card}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </ShadowBase>
    </Pressable>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.base,
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:fontCollection.JosefinSansBold,
    color: 'white',
    textAlign: 'center', 
  },
});
