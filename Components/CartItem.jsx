import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { deleteCartItem, addCartItem } from '../features/cart/cartSlice';
import CounterCart from './CounterCart';
import colors from '../Global/colors';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handlerAddCartItem = (quantity) => {
        dispatch(addCartItem({ ...item, quantity }));
    };

    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.img} source={{ uri: item.thumbnail }} resizeMode="cover" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.brand}>{item.brand}</Text>
                    <Text style={styles.price}>Price: ${item.price}</Text>
                </View>
            </View>
            <View style={styles.counterContainer}>
                <CounterCart item={item} />
            </View>
            <Pressable onPress={() => dispatch(deleteCartItem(item.id))}>
                <Entypo name="trash" size={30} color={colors.gold} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.lightGray,
        padding: 20,
        margin: 10,
        borderWidth: 2,
        borderColor: colors.base,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, 
    },
    imageContainer: {
        marginRight: 10,
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    brand: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5
    },
    price: {
        color: colors.gold,
        fontSize: 16,
        fontWeight: 'bold'
    },
    counterContainer: {
        marginTop: 10, 
    }
});

export default CartItem;
