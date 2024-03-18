import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Modal, Pressable, Text } from 'react-native';
import AddButton from "../Components/AddButton";
import * as ImagePicker from 'expo-image-picker';
import { useGetImageQuery, usePutImageMutation } from '../app/services/profile';
import { useSelector } from 'react-redux';

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [triggerImage] = usePutImageMutation();
    const localId = useSelector((state) => state.auth.localId);
    const { data, isSuccess } = useGetImageQuery(localId);

    useEffect(() => {
        if (isSuccess && data) setImage(data.image);
    }, [isSuccess, data]);

    const pickImage = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();

        if (granted) {
            let result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [6, 4],
                quality: 0.3,
                base64: true
            });

            if (!result.canceled) {
                setImage('data:image/jpeg;base64,' + result.assets[0].base64);
            }
        }
    };

    const confirmImage = () => {
        triggerImage({ image, localId });
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Image
                source={image ? { uri: image } : require("../assets/user.jpeg")}
                style={styles.image}
                resizeMode='cover'
            />
            <AddButton title="Take a photo" onPress={pickImage} />
            <AddButton title="Confirm photo" onPress={confirmImage} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Photo has been updated!</Text>
                        <Pressable onPress={handleCloseModal}>
                            <Text style={[styles.modalButton, styles.modalButtonText]}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ImageSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    image: {
        width: 200,
        height: 200
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    modalText: {
        fontSize: 20,
        marginBottom: 15
    },
    modalButton: {
        marginTop: 10,
        color: 'purple',
        fontWeight: 'bold'
    },
    modalButtonText: {
        fontSize: 18,
        color: 'gold'
    }
});
