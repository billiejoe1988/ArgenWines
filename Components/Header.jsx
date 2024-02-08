import { StyleSheet, Text, View } from 'react-native';
import colors from '../Global/colors';

const Header = ({title="ArgenWines"}) => {
  return (
    <View style={styles.container}> 
       <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.base,
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color:'white' 
    }
});