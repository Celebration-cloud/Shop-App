import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = (props) => {
  return (
    <View className={`p-5`}>
      <FlatList data={props.data} renderItem={cardComponent} {...props} className={`h-full`} />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})