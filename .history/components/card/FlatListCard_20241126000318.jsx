import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = () => {
  const { shopItems} = useSelector(state => state.shop)
  return (
    <View>
      <FlatList data={}/>
    </View>
  );
}

export default FlatListCard

const styles = StyleSheet.create({})