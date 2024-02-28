import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  Home  from '../Screens/Home'
import  ProductDetail  from '../Screens/ProductDetail'
import  ProductsByCategory  from '../Screens/ProductsByCategory'
import Header from '../Components/Header'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import TabBarIcon from '../Components/TabBarIcon'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import colors from '../Global/colors';
import OrdersStack from './OrderStack';
import { useSelector } from 'react-redux';


const Tab = createBottomTabNavigator();

const MainNavigator = () => {
    return (
          <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar
                }}
           >
                <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Products" nameIcon="home" focused={focused}/>
                }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Cart" nameIcon="shopping-cart" focused={focused}/>
                    }}

                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="Order" nameIcon="list" focused={focused}/>
                    }}
                />

             </Tab.Navigator>
           </NavigationContainer>
    )
  }
  
  export default MainNavigator

  const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.lightGray,
        width:"100%",
        height:60,
        position:"absolute",
        borderRadius:5,
        elevation:4,
        /*Shadow IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
    }
})