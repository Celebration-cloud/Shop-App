import React, { useRef } from "react";

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { Stack, Tabs, useLocalSearchParams } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import MainButton from "../../../../components/MainButton.android";
import { Colors } from "../../../../constants/Colors";
import { addToCart } from "../../../../store/actions/shopActions";

const DetailScreen = () => {
  const { id, name, imageUrl, description, category, price } =
    useLocalSearchParams();
  const { loading, cartItems } = useSelector((state) => state.shop);
  const ColorMode = useColorScheme();
  const dispatch = useDispatch();
  const cart = useRef([]);
  cart.current = cartItems;

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
    <View className="bg-primary-400" style={styles.container}>
      <Stack.Screen options={{ title: name }} />
      <Tabs.Screen options={{}} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.priceCategory}>
        <Text className="text-typography-50" style={styles.price}>
          ${price}
        </Text>
        <Text style={styles.category} className="bg-yellow-700 text-orange-200">
          Category:{" "}
          <Text className="bg-red-500" style={styles.categoryText}>
            {category}
          </Text>
        </Text>
      </View>
      <View style={styles.description} className="bg-primary-200 m-5">
        <Text className="text-typography-white" style={styles.descriptionText}>
          {description}
        </Text>
      </View>
      <MainButton
        style={{
          ...styles.btn,
          backgroundColor:
            ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint,
        }}
        text={styles.text}
        onPress={handleAddToCart}
      >
        {loading ? "Loading..." : "ADD TO CART"}
      </MainButton>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: "darkorange"
  },
  imageContainer: {
    overflow: "hidden",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: Dimensions.get("window").height / 3,
    backgroundColor: Colors.dark.icon,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  priceCategory: {
    width: Dimensions.get("window").width,
    justifyContent: "space-around",
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: Dimensions.get("window").fontScale * 30,
    fontWeight: "heavy",
  },
  category: {
    fontSize: Dimensions.get("window").fontScale + 13,
    fontWeight: "heavy",
    width: Dimensions.get("window").width / 2,
    backgroundColor: "grey",
    color: "white",
    borderRadius: 100,
    padding: Dimensions.get("window").scale * 4,
  },
  categoryText: {
    padding: Dimensions.get("window").scale * 10,
    paddingLeft: 10,
    backgroundColor: "white",
    color: "black",
    width: 30
  },
  description: {
    marginHorizontal: 15,
    backgroundColor: "orangered",
    borderRadius: 30,
    padding: Dimensions.get("window").scale * 10,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionText: {
    fontSize: Dimensions.get("window").fontScale * 20,
  },
  btn: {
    width: Dimensions.get("window").width / 2,
    padding: Dimensions.get("window").scale * 5,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 15,
    color: "white",
    fontWeight: "heavy",
  },
});
