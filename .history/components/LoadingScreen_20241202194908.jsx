import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const LoadingScreen = () => {
    const { loading } = useSelector(
      (state) => state.shop
    );
  return 
    {loading && (
        <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
      )}
  
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