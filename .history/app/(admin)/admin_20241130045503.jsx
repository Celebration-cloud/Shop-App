import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux'

import FlatListCard from '../../components/card/FlatListCard'

const AdminScreen = () => {
    const { shopItems } = useSelector(state => state.shop)
    const router = useRouter()
    const handleEdit = (data) => { 
        console.log(`edit: ${data}`)
         router.navigate({
           pathname: "editOrAdd/[slug]",
           params: { slug: "Edit Product" },
         });
         

     };
    const handleDelete = (data) => { 
        console.log(`delete: ${data}`)
     };
  return (
    <View>
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={handleDelete} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})