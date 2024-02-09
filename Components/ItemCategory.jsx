import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import ShadowBase from '../Wrapper/ShadowBase';
import { fontCollection } from '../Global/fonts';

const ItemCategory = ({ item, selectedCategoryState }) => {
  const backgroundImage = require(`../assets/tinto.jpg`);

  return (
    <Pressable onPress={() => selectedCategoryState(item)}>
      <ShadowBase style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </ShadowBase>
    </Pressable>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  container: {
    width: "90%", 
    margin: 5, 
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal:"5%",
    marginVertical:8,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20, 
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: fontCollection.JosefinSansBold,
    color: 'white',
    textAlign: 'center',
    padding: 5, 
  },
  backgroundImage: {
    width: "100%",
    height: 100,
  },
});



