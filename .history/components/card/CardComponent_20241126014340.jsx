import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"

const List = ({data}) => {
  const ColorMode = useColorScheme()
  const handleDetails = () => { `details: ${console.log(data) }`};
  const handleCarts = () => {  `details: ${console.log(data)}` };
  return (
    <View style={styles.container} className='bg-slate-700'>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <View style={styles.group} className='bg-slate-400'>
        <View style={styles.btn}>
          <Button
            title="Details"
            onPress={handleDetails}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>

        <Text style={styles.title} className='text-slate-800'>{data.text}</Text>
        <View style={styles.btn}>
          <Button
            title="Cart"
            onPress={handleCarts}
            color={ColorMode === "dark" ? Colors.dark.tint : Colors.light.tint}
          />
        </View>
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
    height: Dimensions.get("window").height / 15,
  },
  btn: {
    width: Dimensions.get("window").width / 5,
    padding: Dimensions.get("window").scale / 1,
    height: Dimensions.get("window").height / 10,
  },
  title: {
    textAlign: "center",
    width: Dimensions.get("window").width / 10,
    fontSize: Dimensions.get("window").fontScale * 5,
    fontWeight: "heavy",
  },
});