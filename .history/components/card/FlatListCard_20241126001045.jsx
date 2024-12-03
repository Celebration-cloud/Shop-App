import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = (props) => {
  
  return (
    <View className={}>
      <FlatList data={props.data} className={`h-full`} />
    </View>
  );
}

export default FlatListCard

const styles = StyleSheet.create({})