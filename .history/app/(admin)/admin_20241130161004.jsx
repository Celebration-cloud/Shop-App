import React from 'react'

import { Alert, StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'

import FlatListCard from '../../components/card/FlatListCard'
import { removeShopItem } from "../../store/actions/shopActions";  

const AdminScreen = () => {
  const dispatch = useDispatch()
    const { shopItems } = useSelector(state => state.shop)
    const router = useRouter()
    const handleEdit = (data) => {
      console.log(`edit: ${data}`);
      router.navigate({
        pathname: "editOrAdd/[slug]",
        params: { slug: "Edit Product", data: JSON.stringify(data)},
      });
    };
    const handleDelete = (data) => { 
      const deleteItem = shopItems.filter(item => {
        return item.id !== data.id;
      })
      dispatch(removeShopItem(deleteItem))
     };
  return (
    <View>
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={Alert.alert("Confirmation", "Are you sure you want to make this change?", [{onPress: handleSubmit, style: "cancel"}])} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})