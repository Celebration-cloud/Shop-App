import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import List from "./List"
const FlatListCard = ({
  data,
  handleDetails,
  handleAddToCart,
  btnLeftTitle,
  btnRightTitle,
}) => {
  const cardComponent = (itemData) => {
    return (
      <List
        data={itemData.item}
        onPressLeft={() => handleDetails(itemData.item)}
        onPressRight={() => handleAddToCart(itemData.item)}
        btnLeftTitle={btnLeftTitle}
        btnRightTitle={btnRightTitle}
      />
    );
  };

  return (
    <View style={styles.container} >
      <FlatList
        data={data}
        renderItem={cardComponent}
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
    marginBottom: 0,
    
  }
})