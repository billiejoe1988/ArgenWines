import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Modal, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../features/cart/cartSlice';
import colors from '../Global/colors';

const Counter = ({ initialValue, textButton, product }) => {
    const [count, setCount] = useState(initialValue);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({ ...product, quantity }));
        setCount(1);
        setModalVisible(true); 
    };

    return (
        <View style={styles.counterContainer}>
            <Button color={colors.base} title=" +" onPress={() => setCount(count + 1)} />
            <Text style={styles.text}>{count}</Text>
            <Button color={colors.base} title=" - " onPress={() => setCount(count - 1)} />
            <Button color={colors.base} title={textButton} onPress={() => handlerAddCartItem(count)} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>
                             {product.title} added to cart!
                        </Text>
                        <Pressable
                            style={[styles.modalButton, styles.closeButton]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    counterContainer: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        width: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 23,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: colors.gold,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    closeButton: {
        backgroundColor: 'gold',
        marginTop: 10,
    },
});
