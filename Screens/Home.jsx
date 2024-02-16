import Categories from '../Components/Categories';
import { View } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Categories navigation={navigation} />
    </View>
  );
}

export default Home;
