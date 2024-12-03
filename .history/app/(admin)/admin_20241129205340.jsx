import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatListCard from '../../components/card/FlatListCard'
const AdminScreen = () => {
    const { loading, error, } = useSelector(state => state.storeKey)
  return (
    <View>
      <FlatListCard />
    </View>
  )
}

export default AdminScreen

const styles = StyleSheet.create({})