import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = (const { shopItems} = useSelector(state => state.shop)) => {
  return (
    <View className={`p-5`}>
      <FlatList data={props.data} renderItem={cardComponent} {...props} className={`h-full`} />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})