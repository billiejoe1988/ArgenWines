import React from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView, useWindowDimensions } from 'react-native';
import ShadowBase from '../Wrapper/ShadowBase';
import { fontCollection } from '../Global/fonts';

const ItemCategory = ({ item, navigation }) => {
  const backgroundImage = require(`../assets/tinto.jpg`);
  const { width, height } = useWindowDimensions();
  const isHorizontal = width > height;

  return (
    <ScrollView style={isHorizontal && styles.scrollViewContainer}>
      <Pressable onPress={() => navigation.navigate("ProductsByCategory", { categorySelected: item })}>
        <ShadowBase style={[styles.container, isHorizontal && styles.horizontalContainer]}>
          <Image source={backgroundImage} style={styles.backgroundImage} resizeMode="cover" />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item}</Text>
          </View>
        </ShadowBase>
      </Pressable>
    </ScrollView>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: 'row', 
    margin: 5, 
    borderRadius: 10,
    marginHorizontal:"5%",
    marginVertical:8,
    overflow: 'hidden'
  },
  horizontalContainer: {
    width: "90",
    marginHorizontal: 5,
    flexGrow: 1,
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
