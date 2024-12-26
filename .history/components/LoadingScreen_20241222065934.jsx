import React, { Fragment, useCallback } from 'react'

import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';

import { getShopItems } from '@/store/actions/shopActions';

import MainButton from './MainButton.android';

const LoadingScreen = () => {
    const { loading, error } = useSelector(
      (state) => state.shop
    );
     const { user, isAuth, token } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const fetchShoppingItems = useCallback(async () => {
      dispatch(getShopItems());
      console.log("done");
    }, [dispatch]);
    console.log(error)
  return (
    <Fragment>
      {error && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>{error}</Text>
          <MainButton onPress={fetchShoppingItems} style={{padding: 10, backgroundColor: "blue"}} text={{color: "white"}}>Refresh</MainButton>
        </View>
      )}

      {loading && !error && (
        <View style={styles.loading}>
          <Text style={styles.loadingText}><ActivityIndicator/></Text>
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