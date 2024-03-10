import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Header from '../Components/Header'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={({navigation,route})=>{
            return {
                header: () => <Header       
                                title= {route.name === "Login" ? "Log In" : "Register"}
                                navigation={navigation}
                                />
            }
        }}
    >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack