import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailScreen = () => {
  const {id, name, imageUrl, description,  category, price} = useLocalSearchParams()

  const data = { id, name, imageUrl, description, category, price };

  const handleAddToCart = () => {
    const checkExistingData =
      cart.current.length > 0
        ? cart.current.find((item) => item.id === data.id)
        : undefined;
    if (cart.length < 1 || !checkExistingData) {
      cart.current = [...cart.current, { count: 1, ...data }];
    } else {
      const addExistingData = cart.current.map((item) =>
        item.id === data.id ? { ...item, count: item.count + 1 } : item
      );
      cart.current = addExistingData;
    }
    dispatch(addToCart(cart.current));
  };
  return (
    <View>
      <Stack.Screen options={{title: name}}/>
      <Image source={{uri: imageUrl}} />
      <Text>${price}</Text>
      <Text>Category: <Text>{category}</Text></Text>
      <Text>{description}</Text>
      <
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10
  }
})