import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Modal, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlice';
import colors from '../Global/colors'

const CounterCart = ({ item }) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({ ...item, quantity }));
        setModalVisible(true);
    };

    return (
        <View style={styles.counterContainer}>
            <Button color={colors.base} title='  +  ' onPress={() => handlerAddCartItem(1)} />
            <Text style={styles.text}>{item.quantity}</Text>
            <Button color={colors.base} title='  -  ' onPress={() => handlerAddCartItem(-1)} />
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Item quantity has been modified</Text>
                        <Pressable style={[styles.modalButton, styles.closeButton]} onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CounterCart;

const styles = StyleSheet.create({
    counterContainer: {
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10
    },
    text: {
        width: 50,
        textAlign: 'center',
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
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
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20
    },
    modalButton: {
        backgroundColor: 'gold',
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    modalButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    closeButton: {
        backgroundColor: 'gold',
        marginTop: 10
    }
});
