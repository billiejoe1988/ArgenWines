import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../Global/colors';
import { useRoute } from '@react-navigation/native';

const OrderDetail = () => {
    const route = useRoute();
    const { order } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Order Detail</Text>
            <Text style={styles.subtitle}>Order ID: {order.id}</Text>

            <FlatList
                data={order.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
                            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
                        </View>
                        <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
                    </View>
                )}
            />

            <Text style={styles.total}>Total: ${order.total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        color: colors.base
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: colors.base,
        paddingBottom: 10,
    },
    itemInfo: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: colors.base,
    },
    itemQuantity: {
        fontSize: 14,
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default OrderDetail;
