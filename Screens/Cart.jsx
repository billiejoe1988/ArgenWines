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
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Item deleted from cart</Text>
                    <Button title="Close" onPress={() => dispatch(hideDeleteModal())} />
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={confirmModalVisible}
                onRequestClose={() => setConfirmModalVisible(false)}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Order confirmed!</Text>
                    <Button title="Close" onPress={() => setConfirmModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderRadius: 5,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
});
