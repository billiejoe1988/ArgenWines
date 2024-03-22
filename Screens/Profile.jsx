import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AddButton from '../Components/AddButton';
import { useSelector } from 'react-redux';
import { useGetImageQuery, useGetUserLocationQuery } from '../app/services/profile';
import Orders from './Orders'; 

const Profile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const userEmail = useSelector((state) => state.auth.email); 
  const { data: locationFormatted } = useGetUserLocationQuery(localId);
  const { data } = useGetImageQuery(localId);

  return (
    <View style={styles.container}>
      <Image
        source={data ? { uri: data.image } : require("../assets/user.jpeg")}
        style={styles.image}
        resizeMode='cover'
      />
      <Text style={styles.text}>{locationFormatted?.address}</Text>
      <Text style={styles.text}>{userEmail}</Text> 
      <View style={styles.addButtonsContainer}>
        <AddButton title={"Add Perfil Image"} onPress={() => navigation.navigate("ImageSelector")} />
        <AddButton title={"Add Address"} onPress={() => navigation.navigate("LocationSelector")} />
      </View>
      <View style={styles.ordersContainer}>
        <Orders />
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 16,
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 10
  },
  addButtonsContainer: {
    alignItems: 'center', 
    marginBottom: 20, 
  },
  ordersContainer: {
    flex: 1,
    width: '100%', 
  }
});

