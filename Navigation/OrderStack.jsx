import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orders from '../Screens/Orders'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Orders'
        screenOptions={({navigation})=>{
            return {
                header: () => {
                    return <Header title='Orders' navigation={navigation}/> 
                }
            }
        }}
    >
        <Stack.Screen name='Orders' component={Orders}/>
    </Stack.Navigator>
  )
}

export default OrdersStack