import { StyleSheet, Text, View, FlatList, Pressable, Modal, Button } from 'react-native'
import CartItem from '../Components/CartItem'
import cart from '../Data/cart.json'
import colors from '../Global/colors'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    let modalVisible = false;

    const handleConfirm = () => {
        modalVisible = true;
    };
    
  return (
    <View style={styles.container}>
        <FlatList
        data={cart.items}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
                <Pressable style={styles.confirmButton} onPress={handleConfirm}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </Pressable>
                <Text style={styles.confirmText2}>Total: $ {cart.total}</Text>
        </View>
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Purchase Confirmed!</Text>
                        <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
                    </View>
                </View>
            </Modal>
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