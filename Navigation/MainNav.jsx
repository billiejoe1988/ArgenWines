import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Home  from '../Screens/Home'
import  ProductDetail  from '../Screens/ProductDetail'
import  ProductsByCategory  from '../Screens/ProductsByCategory'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
          <NavigationContainer>
                <Stack.Navigator
                  initialRouteName='Home'
                  screenOptions={({route,navigation})=>{
                      return {
                      header: () =>{
                          return <Header 
                                      navigation={navigation}
                                      title={route.name === "Home" ? "Categories":
                                              route.name ==="ProductsByCategory" ? route.params.categorySelected:
                                              "Detail"
                      }/>
                      }
                      }
                  }}
              >
                    <Stack.Screen name="Home" component={Home}  options={{ title: 'ArgenWines' }}/>
                    <Stack.Screen name="ProductsByCategory" component={ProductsByCategory} />
                    <Stack.Screen name="ProductDetail" component={ProductDetail} />
                 </Stack.Navigator>
           </NavigationContainer>
    )
  }
  
  export default MainNavigator