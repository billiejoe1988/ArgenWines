import { StyleSheet,FlatList } from 'react-native'
import OrderItem from '../Components/OrderItems'
import { useGetOrdersQuery } from '../app/services/orders'
import { useSelector } from 'react-redux'

const Orders = () => {

  const localId = useSelector((state) => state.auth.localId)
  const {data:orders} = useGetOrdersQuery(localId)
  
  return (
    <FlatList
    data={orders}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=> <OrderItem order={item}/>}
    />
  )
}

export default Orders

const styles = StyleSheet.create({
  
})