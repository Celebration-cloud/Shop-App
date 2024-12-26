import React from 'react'

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import List from "./List"
import { useSelector } from 'react-redux';

const FlatListCard = ({
  data,
  handleLeftButton,
  handleRightButton,
  btnLeftTitle,
  btnRightTitle
}) => {
   const { loading } = useSelector((state) => state.shop);
   const fetchShoppingItems = useCallback(async () => {
         dispatch(getShopItems());
   
         console.log("done")
       }, [dispatch]);
  const cardComponent = (itemData) => {
    return (
      <List
        data={itemData.item}
        onPressLeft={() => handleLeftButton(itemData.item)}
        onPressRight={() => handleRightButton(itemData.item)}
        btnLeftTitle={btnLeftTitle}
        btnRightTitle={btnRightTitle}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        onRefresh={fetchShoppingItems}
        refreshing={loading}
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