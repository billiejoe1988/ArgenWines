import { StyleSheet, Text,Pressable } from 'react-native'
import colors from './../Global/colors'

const SubmitButton = ({title,onPress}) => {
   
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.gold,
        padding:10,
        alignItems:"center",
        borderRadius:10,
        borderColor:'gray'
    },
    text:{
        textAlign:"center",
        color: 'black' ,
        fontSize:18
    }
})