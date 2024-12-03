import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListCard from '../../components/card/FlatListCard'
const AdminScreen = () => {
    const { shopItems } = useSelector(state => state.storeKey)
    const handleEdit = () => { 
        console,
     };
    const handleDelete = () => { 

     };
  return (
    <View>
      <FlatListCard data={shopItems} />
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})