import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = (props) => {
  
  return (
    <View className={`p-5`}>
      <FlatList data={data}  className={`h-full`} />
    </View>
  );
}

export default FlatListCard

const styles = StyleSheet.create({})