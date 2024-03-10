import { StyleSheet, Text, View ,Pressable } from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import {useState} from 'react'
import colors from '../Global/colors'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { loginSchema } from '../Validations/authSchema'

const Login = ({navigation}) => {

    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin] = useLoginMutation()

    const onSubmit = async () => {
      try {
        loginSchema.validateSync({email,password})
        const {data} = await  triggerLogin({email,password})
        dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))
      } catch (error) {
        setErrorEmail("")
        setErrorPassword("")

        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            break
          case "password":
            setErrorPassword(error.message)
            break
          default:
            break
        }
      }
    }

  return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton onPress={onSubmit} title="Log In"/>
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Sign In</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.base,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
    },
    sub:{
      fontSize:14,
    },
    subLink:{
      fontSize:14,
      color:"gray"
    }
})