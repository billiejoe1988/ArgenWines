import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { useState } from 'react';
import colors from '../Global/colors';
import { useLoginMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { loginSchema } from '../Validations/authSchema';
import { deleteSession, insertSession } from '../Data/db';


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
        <SubmitButton onPress={onSubmit} title="Log In" />
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
    marginTop: 10,
    color: 'purple',
    fontWeight: 'bold',
  },
  modalButtonText: {
    fontSize: 18, 
    color:'gold'
  },
  modalText: {
    fontSize: 23,
  }
});
