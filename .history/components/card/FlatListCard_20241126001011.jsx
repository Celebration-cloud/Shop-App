import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = (props) => {
  
  return (
    <View>
      <FlatList data={props.data} class />
    </View>
  );
}

export default FlatListCard

const styles = StyleSheet.create({})