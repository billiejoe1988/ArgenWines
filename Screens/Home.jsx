import { StyleSheet,View } from 'react-native'
import Header  from '../Components/Header'
import Categories from '../Components/Categories'


const Home = ({selectedCategoryState}) => {
  return (
    <View>
        <Header title="ArgenWines"/>
        <Categories selectedCategoryState={selectedCategoryState}/>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})