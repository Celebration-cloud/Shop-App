import React from 'react'

import { Alert, StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'expo-router'

import FlatListCard from '../../components/card/FlatListCard'
import LoadingScreen from "../../components/LoadingScreen"
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
      console.log(data)
      // const deleteItem = shopItems.filter(item => {
      //   return item.id !== data.id;
      // })
      // dispatch(removeShopItem(deleteItem))
    };
    const handleConfirm = (data) => { 
      Alert.alert(
        "Confirmation",
        "Are you sure you want to make this change?",
        [{text: "OK", onPress: () => handleDelete(data), style: "cancel" },{text: "CANCEL", style: "destructive"} ]
      );
     };
  return (
    <View>
      <LoadingScreen />
      <FlatListCard data={shopItems} handleLeftButton={handleEdit} handleRightButton={handleConfirm} btnLeftTitle="EDIT" btnRightTitle="DELETE"/>
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})