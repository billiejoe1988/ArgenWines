import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useState } from 'react';

const Search = ({ handlerKeyword }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handlerInput = (text) => setInput(text);

    const search = () => {
        const trimmedInput = input.trim();
        const expression = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        if (expression.test(input)) {
            setError("Characters Error");
            return;
        }
        setError("");
        handlerKeyword(trimmedInput);
        Keyboard.dismiss();
    };

    const resetSearch = () => {
        handlerKeyword("");
        setInput("");
        setError("");
    };

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <TextInput
                    placeholder='Search'
                    value={input}
                    onChangeText={handlerInput}
                    style={styles.input}
                />
                <Pressable onPress={search} style={styles.icon}>
                    <AntDesign name='search1' size={25} color="black"/>
                </Pressable>
                <Pressable onPress={resetSearch} style={styles.icon}>
                    <AntDesign name='closecircle' size={25} color="black"/>
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'gray',
        paddingBottom: 10,
    },
    container: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        backgroundColor: '#e8e5e579',
    },
    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        opacity: 0.7,
        backgroundColor: '#f8f8f89e',
        maxWidth: '80%',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    errorText: {
        color: "red",
        paddingHorizontal: 10,
    },
});
