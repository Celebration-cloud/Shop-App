import React, { useCallback } from 'react'

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'

import List from "./List"
import { useDispatch, useSelector } from 'react-redux';
import { getShopItems } from '@/store/actions/shopActions';

const FlatListCard = ({
  data,
  handleLeftButton,
  handleRightButton,
  btnLeftTitle,
  btnRightTitle
}) => {

   const { loading } = useSelector((state) => state.shop);
   const dispatch = useDispatch()
  const navigation = useNavigatio();

   const fetchShoppingItems = useCallback(async () => {
     dispatch(getShopItems());
     console.log("done");
   }, [dispatch]);

   useEffect(() => {
         const refresh = navigation.addListener("focus", fetchShoppingItems);
   
         return () => {
           refresh();
         };
       }, [fetchShoppingItems]);


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