import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Profile from '../Screens/Profile'
import ImageSelector from '../Screens/ImageSelector'
import LocationSelector from '../Screens/LocationSelector'

const Stack = createNativeStackNavigator()
const ProfileStack = () => {

  return (
    <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={({navigation})=>{
            return {
                header: () => {
                    return <Header title='User Profile' navigation={navigation}/>  
                }
            }
        }}

    >
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='ImageSelector' component={ImageSelector}/>
        <Stack.Screen name='LocationSelector' component={LocationSelector}/>
    </Stack.Navigator>
  )
}

export default ProfileStack