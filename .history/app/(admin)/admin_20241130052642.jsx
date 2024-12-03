import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router'
import { useDispatch, useSelector } from 'react-redux'

import FlatListCard from '../../components/card/FlatListCard'
import deleteShopItem from '../../store/actions/shopActions'  

const AdminScreen = () => {
  const dispatch = useDispatch()
    const { shopItems } = useSelector(state => state.shop)
    const router = useRouter()
    const handleEdit = (data) => {
      console.log(`edit: ${data}`);
      router.navigate({
        pathname: "editOrAdd/[slug]",
        params: { slug: "Edit Product" },
      });
    };
    const handleDelete = (data) => { 
      const deleteItem = shopItems.filter(item => (
        reitem.id !== data.id
      ))
      console.log(deleteItem)
      dispatch(deleteShopItem(deleteItem))
     };
  return (
    <View>
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={handleDelete} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})