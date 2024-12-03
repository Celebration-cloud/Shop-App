import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"
import { Card } from '../ui/card';

const List = ({data}) => {
  const ColorMode = useColorScheme()
  const handleDetails = () => { `details: ${console.log(data) }`};
  const handleCarts = () => {  `details: ${console.log(data)}` };
  return (
    <Card size='md' variant='elevated' className={` bg-slate-400 w-full gap-5`}>
      <View className={`w-full h-30`}>
        <Image source={{ uri: data.image }} className={`w-full h-20`}/>
      </View>
      <View className={`flex-row gap-2 items-center w-full justify-between`}>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title="Details"
            onPress={handleDetails}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
        
        <Text>{data.text}</Text>
        <View className={`w-20 rounded-sm p-4 `}>
          <Button
            title="Cart"
            onPress={handleCarts}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
      </View>
    </Card>
  );
}
const cardComponent = (itemData) => {
  return <List data={itemData.item}/>
}

export default cardComponent

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height / 10,
    marginVertical: Dimensions.get("window").height / 20,
    padding: 2,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 10,
    width: "100%",
    height: Dimensions.get("window").height / 15,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: Dimensions.get("window").width / 30,
    padding: Dimensions.get("window").scale / 1,
    height: Dimensions.get("window").height / 10,
  },
  title: {
    textAlign: "center",
    width: Dimensions.get("window").width / 10,
    fontSize: Dimensions.get("window").fontScale * 10,
    fon
  },
});