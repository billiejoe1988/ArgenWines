import { StyleSheet, Text, View, FlatList, Pressable, Modal, Button } from 'react-native'
import CartItem from '../Components/CartItem'
import colors from '../Global/colors'
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../features/cart/cartSlice';
import { usePostOrderMutation } from '../app/services/orders';

const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state)=> state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()

    const handlerAddOrder = async () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
         await triggerAddOrder({localId,order})
         dispatch(deleteCart())
         navigation.navigate("OrdersStack")
    }
    
  return (
    <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
                <Pressable style={styles.confirmButton} onPress={handlerAddOrder}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </Pressable>
                <Text style={styles.confirmText2}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        marginBottom:60,
    },
    confirmContainer:{
        flexDirection:"row",
        backgroundColor:"white",
        padding:25,
        justifyContent:"space-between",
    },
    confirmText:{
        fontSize:18,
        color:colors.base,
    },
    confirmText2:{
        fontSize:28,
        color:colors.base,
    },
    confirmButton: {
        backgroundColor: 'gold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor:'gray',
        borderRadius: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
 
});