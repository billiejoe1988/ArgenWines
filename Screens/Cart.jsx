import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Modal, Button } from 'react-native';
import CartItem from '../Components/CartItem';
import colors from '../Global/colors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart, hideDeleteModal } from '../features/cart/cartSlice';
import { usePostOrderMutation } from '../app/services/orders';

const Cart = ({ navigation }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const localId = useSelector((state) => state.auth.localId);
    const [triggerAddOrder] = usePostOrderMutation();
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);

    const handlerAddOrder = async () => {
        const createdAt = new Date().toLocaleString();
        const order = {
            createdAt,
            ...cart,
        };
        await triggerAddOrder({ localId, order });
        dispatch(deleteCart());
        setConfirmModalVisible(true);
    };

    const closeModal = () => {
        dispatch(hideDeleteModal()); 
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable style={styles.confirmButton} onPress={handlerAddOrder}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </Pressable>
                <Text style={styles.confirmText2}>Total: $ {cart.total}</Text>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={cart.showDeleteModal}
                onRequestClose={() => dispatch(hideDeleteModal())}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Item deleted from cart</Text>
                        <Button style={[styles.modalButton, styles.closeButton]} title="Close" onPress={() => dispatch(hideDeleteModal())} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={confirmModalVisible}
                onRequestClose={() => setConfirmModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Order confirmed!</Text>
                        <Button style={[styles.modalButton, styles.closeButton]} title="Close" onPress={() => setConfirmModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom: 60,
    },
    confirmContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 25,
        justifyContent: 'space-between',
    },
    confirmText: {
        fontSize: 18,
        color: colors.base,
    },
    confirmText2: {
        fontSize: 28,
        color: colors.base,
    },
    confirmButton: {
        backgroundColor: 'gold',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'gray',
        borderRadius: 5,
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
    modalButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    closeButton: {
        backgroundColor: 'purple',
        marginTop: 10,
    },
});
