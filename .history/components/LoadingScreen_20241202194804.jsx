import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const LoadingScreen = () => {
    const { cartItems } = useSelector(
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