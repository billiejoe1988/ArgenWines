import { StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrderStack'
import TabBarIcon from '../Components/TabBarIcon';
import colors from '../Global/colors'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
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
                        tabBarIcon: ({focused}) => <TabBarIcon title="Orders" nameIcon="list" focused={focused}/>
                    }}
            />
            <Tab.Screen 
                    name='ProfileStack' 
                    component={ProfileStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title="User Profile" nameIcon="user" focused={focused}/>
                    }}
            />
    </Tab.Navigator>
  )
}

export default TabNavigator

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