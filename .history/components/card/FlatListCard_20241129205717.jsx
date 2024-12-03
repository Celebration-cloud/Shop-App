import React from 'react'

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import List from "./List"

const FlatListCard = ({
  data,
  handle,
  handleAddToCart,
  btnLeftTitle,
  btnRightTitle,
}) => {
  const cardComponent = (itemData) => {
    return (
      <List
        data={itemData.item}
        onPressLeft={() => handle(itemData.item)}
        onPressRight={() => handleAddToCart(itemData.item)}
        btnLeftTitle={btnLeftTitle}
        btnRightTitle={btnRightTitle}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={cardComponent}
        className={`w-full h-full`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 0,
    marginHorizontal: Dimensions.get("window").width / 35
  }
})