import { StyleSheet, Text, View, Pressable, Modal, Image } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { useState } from 'react';
import colors from '../Global/colors';
import { useLoginMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { loginSchema } from '../Validations/authSchema';
import { deleteSession, insertSession } from '../Data/db';

const Logo = require('../assets/logoPng.png');

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [triggerLogin] = useLoginMutation();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      if (data) {
        setModalMessage(`Welcome, ${data.email} !`);
        setModalVisible(true);
        setTimeout(() => {
          deleteSession();
          insertSession(data);
          dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }));
        }, 2000); 
      }
    } catch (error) {
      setErrorEmail('');
      setErrorPassword('');
      switch (error.path) {
        case 'email':
          setErrorEmail(error.message);
          break;
        case 'password':
          setErrorPassword(error.message);
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
      <Image source={Logo} style={styles.logo} />
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
        <SubmitButton onPress={onSubmit} title="Log In" style={styles.loginButton} />
        <Text style={styles.sub}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.subLink}>Sign up</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Pressable onPress={handleCloseModal}>
              <Text style={[styles.modalButton, styles.modalButtonText]}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingHorizontal: 20, 
  },
  logo: {
    width: 200, 
    height: 200,
    marginBottom: 20,
  },
  container: {
    width: '100%', 
    backgroundColor: colors.base,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20, 
  },
  loginButton: {
    width: '80%',
    marginTop: 20,
  },
  sub: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  subLink: {
    fontSize: 18,
    color: colors.gold,
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
  },
  modalButton: {
    marginTop: 10,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  modalButtonText: {
    fontSize: 18,
  },
  modalText: {
    fontSize: 23,
    marginBottom: 20,
  },
});
