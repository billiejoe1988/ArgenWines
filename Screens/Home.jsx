import Categories from '../Components/Categories';
import { View } from 'react-native';
import Counter from '../Components/Counter'

const Home = ({ navigation }) => {
  return (
    <View>
      <Categories navigation={navigation} />
    </View>
  );
}

export default Home;
