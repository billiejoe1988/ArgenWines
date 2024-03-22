import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useState } from 'react';

const Search = ({ handlerKeyword }) => {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handlerInput = (text) => setInput(text);

    const search = () => {
        const trimmedInput = input.trim();
        const expression = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]/;
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
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Search'
                    value={input}
                    onChangeText={handlerInput}
                    style={styles.input}
                />
                <Pressable onPress={search} style={styles.searchIcon}>
                    <AntDesign name='search1' size={25} color="black"/>
                </Pressable>
                <Pressable onPress={resetSearch} style={styles.clearIcon}>
                    <AntDesign name='closecircle' size={25} color="black"/>
                </Pressable>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        borderColor: 'gold',
        backgroundColor: 'white',
        marginRight: 8,
    },
    searchIcon: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
    clearIcon: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
    errorText: {
        color: "red",
        marginTop: 8,
    },
});
