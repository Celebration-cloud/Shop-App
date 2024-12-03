import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = () => {
  const { loading, error, reducerKey} = useSelector(state => state.storeKey)
  return (
    <View>
      <FlatList data={}/>
    </View>
  );
}

export default FlatListCard

const styles = StyleSheet.create({})