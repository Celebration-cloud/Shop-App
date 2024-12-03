import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = ({ data }) => {
  return (
    <View className={`px-5`}>
      <FlatList
        data={data}
        renderItem={cardComponent}
        
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})