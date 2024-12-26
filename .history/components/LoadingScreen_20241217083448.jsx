import React, { Fragment, useCallback } from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import MainButton from './MainButton.android';
import { getShopItems } from '@/store/actions/shopActions';

const LoadingScreen = () => {
    const { loading, error } = useSelector(
      (state) => state.shop
    );
    const dispatch = useDispatch();

    const fetchShoppingItems = useCallback(async () => {
      dispatch(getShopItems());
      console.log("done");
    }, [dispatch]);
    const cancel = () => {
      
    }
    console.log(error)
  return (
    <Fragment>
      {error && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>{error}</Text>
          <MainButton onPress={fetchShoppingItems} style={{padding: 10, backgroundColor: "blue"}} text={{color: "white"}}>Refresh</MainButton>
          <MainButton onPress={fetchShoppingItems} style={{padding: 10, backgroundColor: "blue"}} text={{color: "white"}}>Cancel</MainButton>
        </View>
      )}

      {loading && !error && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
    </Fragment>
  );
}

export default LoadingScreen

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    zIndex: 100,
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    backgroundColor: "white",
  },
  loadingText: {
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "heavy",
  },
});