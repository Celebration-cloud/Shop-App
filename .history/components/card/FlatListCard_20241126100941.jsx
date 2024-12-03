import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lis
const FlatListCard = ({ data, handleDetails, handleAddToCart }) => {
  const cardComponent = (itemData) => {
    return (
      <List
        data={itemData.item}
        onPressLeft={() => handleDetails(itemData.item)}
        onPressRight={() => handleAddToCart(itemData.item)}
      />
    );
  };

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