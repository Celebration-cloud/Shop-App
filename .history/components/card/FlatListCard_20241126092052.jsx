import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = (props.data) => {
  return (
    <View className={`px-5`}>
      <FlatList
        data={pdata}
        renderItem={cardComponent}
        {...props}
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})