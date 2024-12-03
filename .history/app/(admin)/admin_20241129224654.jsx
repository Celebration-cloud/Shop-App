import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux'

import FlatListCard from '../../components/card/FlatListCard'

const AdminScreen = () => {
    const { shopItems } = useSelector(state => state.shop)
    const router = 
    const handleEdit = (data) => { 
        console.log(`edit: ${data}`)
     };
    const handleDelete = (data) => { 
        console.log(`delete: ${data}`)
        router.navigate({
          pathname: "editOrAdd/[slug]",
          params: { slug: "Add Product" },
        });
     };
  return (
    <View>
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={handleDelete} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})