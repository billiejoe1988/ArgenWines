// App.js
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { fontCollection } from './Global/fonts';
import MainNavigator from './Navigation/MainNav';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection);

  if (!fontsLoaded) return null;
  
  return (
    <Provider store={store}> 
      <StatusBar style={styles.status} />
      <MainNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  status: { 
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
