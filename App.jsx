import { StyleSheet, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import { fontCollection } from './Global/fonts';
import MainNavigator from './Navigation/MainNav';

const App = () => {
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null;
  
  return (
    <>
      <StatusBar style={styles.status} />
      <MainNavigator />
    </>
  );
};

export default App

const styles = StyleSheet.create({
  status: { 
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
