import React, { Fragment } from 'react'

import { Dimensions, StyleSheet, Text, View } from 'react-native'

import { useSelector } from 'react-redux';
import MainButton from './MainButton.android';

const LoadingScreen = () => {
    const { loading, error } = useSelector(
      (state) => state.shop
    );
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
          <MainButton onPress={fetchShoppingItems} style={padding}>Refresh</MainButton>
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