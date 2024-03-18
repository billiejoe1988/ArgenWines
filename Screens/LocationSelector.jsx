import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import MapPreview from '../Components/MapPreview';
import AddButton from '../Components/AddButton';
import * as Location from "expo-location";
import { useSelector } from 'react-redux';
import { usePutUserLocationMutation } from '../app/services/profile';

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({ latitude: "", longitude: "" });
    const [errorMessage, setErrorMessage] = useState(null);
    const [address, setAddress] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const localId = useSelector((state) => state.auth.localId);
    const [triggerUserLocation] = usePutUserLocationMutation();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMessage("Permission denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (location.latitude) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=AIzaSyDZ-MEHLLBOGy-CJGujvU46Wx1KLw9ZKbY`);
                const data = await response.json();
                setAddress(data.results[0].formatted_address);
            }
        })();
    }, [location]);

    const onConfirmAddress = async () => {
        const locationFormatted = {
            address,
            location
        };
        await triggerUserLocation({ localId, locationFormatted });
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{address}</Text>
            <MapPreview latitude={location.latitude} longitude={location.longitude} />
            <AddButton title="Confirm Location" onPress={onConfirmAddress} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Location has been updated!</Text>
                        <Pressable onPress={handleCloseModal}>
                            <Text style={[styles.modalButton, styles.modalButtonText]}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 40,
        gap: 20
    },
    text: {
        fontSize: 16,
        marginLeft: 30,
        marginRight: 30,
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
