import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrderStack';
import TabBarIcon from '../Components/TabBarIcon';
import colors from '../Global/colors';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ShopStack'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,
      }}
    >
      <Tab.Screen
        name='ShopStack'
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <TabBarIcon title="Products" nameIcon="home" focused={focused} />
        }}
      />
      <Tab.Screen
        name='CartStack'
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) =>
            <TabBarIcon title="Cart" nameIcon="shopping-cart" focused={focused} />
        }}
      />
      <Tab.Screen
        name='OrdersStack'
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon title="Orders" nameIcon="list" focused={focused} />
        }}
      />
      <Tab.Screen
        name='ProfileStack'
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon title="User Profile" nameIcon="user" focused={focused} />
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', 
      },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 20, 
      },
  tabBar: {
    backgroundColor: 'gray',
    borderTopWidth: 0, 
    height: 70, 
    paddingTop: 10,
    paddingBottom: 10, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
    position: "absolute",
    bottom: 0,
    width: "100%",
    elevation: 4,
    // Shadow IOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, 
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tabBarIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
