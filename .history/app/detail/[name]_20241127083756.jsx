import { Dimensions, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import MainButton from '../../components/MainButton.android'
import { Colors } from "../../constants/Colors";

const DetailScreen = () => {
  const { id, name, imageUrl, description, category, price } =
    useLocalSearchParams();
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
    <View style={styles.container}>
      <Stack.Screen options={{ title: name }} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.priceCategory}>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.category}>
          Category: <Text style={styles.categoryText}>{category}</Text>
        </Text>
      </View>
      <Text style={styles.description}>{description}</Text>
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
  imageContainer: {
    overflow: 'hidden',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: Dimensions.get("window").height / 5,
    backgroundColor: Colors.
  },
  image: {
    width: '100%',
    height: "100%",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  priceCategory: {},
  price: {},
  category: {},
  categoryText: {},
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