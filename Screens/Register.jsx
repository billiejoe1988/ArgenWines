import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import colors from '../Global/colors';
import { useRegisterMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { registerSchema } from '../Validations/authSchema';
import { deleteSession, insertSession } from '../Data/db';

const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const [triggerRegister] = useRegisterMutation();

    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPassword });
            const { data } = await triggerRegister({ email, password });
            setModalMessage(`Congratulations! You have successfully created a user: ${data.email}`);
            setModalVisible(true);
            setTimeout(() => {
                deleteSession();
                insertSession(data);
                dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }));
            }, 2000);
        } catch (error) {
            setErrorEmail('');
            setErrorPassword('');
            setErrorConfirmPassword('');

            switch (error.path) {
                case 'email':
                    setErrorEmail(error.message);
                    break;
                case 'password':
                    setErrorPassword(error.message);
                    break;
                case 'confirmPassword':
                    setErrorConfirmPassword(error.message);
                    break;
                default:
                    break;
            }
            setModalMessage(error.message);
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <InputForm
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirmPassword}
                />
                <SubmitButton onPress={onSubmit} title="Sign Up" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.subLink}>Log in</Text>
                </Pressable>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{modalMessage}</Text>
                        <Pressable onPress={handleCloseModal}>
                            <Text style={[styles.modalButton, styles.modalButtonText]}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        backgroundColor: colors.base,
        gap: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        opacity: 0.9,
        borderColor: colors.gold,
    },
    sub: {
        fontSize: 18,
        color: 'white',
    },
    subLink: {
        fontSize: 18,
        color: 'gold',
        fontWeight: 'bold',
    },
    modalContainer: {
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
    modalButton: {
        marginTop: 20,
        color: 'purple',
        fontWeight: 'bold',
    },
    modalText: {
        fontSize: 23,
        textAlign: 'center',
    },
    modalButtonText: {
        fontSize: 18, 
      },
});
