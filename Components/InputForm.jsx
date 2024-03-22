import { StyleSheet, Text, View, TextInput } from 'react-native';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
        placeholderTextColor="gray" 
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingBottom: 30,
  },
  input: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    borderRadius: 10, 
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginHorizontal: '5%',
    marginVertical: 10,
  },
  titleInput: {
    width: '90%',
    marginHorizontal: '5%',
    fontSize: 18,
    color: 'white',
  },
  error: {
    fontSize: 16,
    color: 'red',
    fontStyle: 'italic',
    marginLeft: 20,
  },
});
