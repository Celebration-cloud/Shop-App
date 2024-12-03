import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"
import MainButton from '../MainButton.android'
import { useDispatch } from 'react-redux';

const List = ({data}) => {
  const ColorMode = useColorScheme()
  // const { cartItems } = useSelector(state => state.shop)
  const [cart, setCart] = useState([])
  const dispatch = useDispatch()
  const addToExitingData = c cart.find((item) => item?.id.includes(data.id))
  const handleDetails = () => { `details: ${console.log(data) }`};
  const handleCarts = () => {
    if(cart.length < 1 || !addToExitingData){
      setCart(curr => {return [{...curr, count: 1, ...data}]})
      console.log(cart)
      // dispatch({type: "CART", payload: [...curr, data]})
    }else if(addToExitingData){
      const exitingData = cart.map((item) => item.id === data.id ? {return : {...curr, count: count + 1}} : item)

    }
  };
  return (
    <View style={styles.container} className="bg-slate-700">
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.group} className="bg-slate-400">
        <MainButton
          style={{
            ...styles.btn,
            backgroundColor:
              ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint,
          }}
          text={styles.text}
          onPress={handleDetails}
        >
          DETAILS
        </MainButton>

        <Text style={styles.title} className="text-slate-800">
          {data.name}
        </Text>
        <MainButton
          style={{
            ...styles.btn,
            backgroundColor:
              ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint,
          }}
          text={styles.text}
          onPress={handleCarts}
        >
          ADD TO CART
        </MainButton>
      </View>
    </View>
  );
}
const cardComponent = (itemData) => {
  return <List data={itemData.item}/>
}

export default cardComponent

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Colors.dark.background,
    height: Dimensions.get("window").height / 4,
    marginVertical: Dimensions.get("window").height / 30,
    elevation: 5,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height / 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Dimensions.get("window").height / 13,
    paddingHorizontal: Dimensions.get("window").scale * 3,
  },
  btn: {
    width: Dimensions.get("window").width / 3.6,
    padding: Dimensions.get("window").scale * 4,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 15,
    color: "white",
    fontWeight: "heavy",
  },
  title: {
    textAlign: "center",
    width: Dimensions.get("window").width / 3,
    fontSize: Dimensions.get("window").fontScale * 20,
    fontWeight: "heavy",
    alignSelf: "center",
  },
});