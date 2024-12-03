import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
    const { shopItems, loading, cartItems } = useSelector(
      (state) => state.shop
    );
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
}

export default LoadingScreen

const styles = StyleSheet.create({})