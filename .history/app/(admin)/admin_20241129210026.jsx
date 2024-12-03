import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListCard from '../../components/card/FlatListCard'
const AdminScreen = () => {
    const { shopItems } = useSelector(state => state.shop)
    const handleEdit = () => { 
        console.log("edit")
     };
    const handleDelete = () => { 
        console.log("delete")
     };
  return (
    <View>
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={handleDelete} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})