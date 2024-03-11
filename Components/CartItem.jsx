import { StyleSheet, Text, View, Pressable, Image  } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { deleteCartItem ,addCartItem } from '../features/cart/cartSlice'
import Counter from './Counter'
import CounterCart from './CounterCart'
import colors from '../Global/colors'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({...item,quantity}))
      }
  return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Image style={styles.img} source={{ uri: item.thumbnail }} resizeMode="cover" />
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.brand}</Text>
                <Text style={styles.text2}>Precio: ${item.price} </Text> 
                <CounterCart item={item} />
            </View>
            <Pressable onPress={()=> dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color="gold"/>
            </Pressable>
        </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.base,
        padding:20,
        margin:10,
        borderWidth:2,
        borderColor: colors.lightGray,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        height:150,
        alignItems:"center"
    },
    textContainer:{
        width:"70%"
    },
    text:{
        color:'white',
        fontSize:19,

    },
    text2:{
        color:colors.gold,
        fontSize:16,
        fontWeight:'bold'

    }
})