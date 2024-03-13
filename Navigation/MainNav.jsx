import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'

const MainNavigator = () => {
    
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth)

  useEffect(()=>{
    ( async ()=>{
     const session = await fetchSession()
     if(session.rows.length){
        const user = session.rows._array[0]
        dispatch(setUser(user))
        
     }
    })()
  },[])

  return (
        <NavigationContainer>
           {user.idToken ? <TabNavigator/> : <AuthStack/>}
        </NavigationContainer>
  )
}

export default MainNavigator

