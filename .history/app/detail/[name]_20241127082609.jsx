import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import MainButton from '../../components/MainButton.android'
import { Colors } from "../../constants/Colors";

const DetailScreen = () => {
  const {id, name, imageUrl, description,  category, price} = useLocalSearchParams()
const ColorMode = useColorScheme();
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
      <Stack.Screen options={{ title: name }} />
      <View>
        <Image source={{ uri: imageUrl }} />
      </View>
      <View>
        <Text>${price}</Text>
        <Text>
          Category: <Text>{category}</Text>
        </Text>
      </View>
      <Text>{description}</Text>
      <MainButton
        style={{
          ...styles.btn,
          backgroundColor:
            ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint,
        }}
        text={styles.text}
        onPress={handleAddToCart}
      >
        ADD TO CART
      </MainButton>
    </View>
  );
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  imageContainer: {},
  image: {},
  priceCategory: {},
  price: {},
  category: {},
  description: {},
  btn: {
    width: Dimensions.get("window").width / 3.6,
    padding: Dimensions.get("window").scale * 4,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 15,
    color: "white",
    fontWeight: "heavy",
  },
});