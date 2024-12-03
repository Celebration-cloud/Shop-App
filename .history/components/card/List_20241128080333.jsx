import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native';
import {Colors} from "../../constants/Colors"
import MainButton from '../MainButton.android'
import { useSelector } from 'react-redux';

const List = ({
  data,
  onPressLeft,
  onPressRight,
  btnLeftTitle,
  btnRightTitle,
}) => {
  // const { loading } = useSelector(state => state.shop)
  const ColorMode = useColorScheme();
  // const btnRight = data && loading ? `Loading...` : btnRightTitle;
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
          onPress={onPressLeft}
        >
          {btnLeftTitle}
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
          onPress={onPressRight}
        >
          {btnRightTitle}
        </MainButton>
      </View>
    </View>
  );
};

export default List

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
    height: Dimensions.get("window").height / 12,
    paddingHorizontal: Dimensions.get("window").scale * 3,
    backgroundColor: "grey",
  },
  btn: {
    width: Dimensions.get("window").width / 4,
    padding: Dimensions.get("window").scale * 3,
  },
  text: {
    fontSize: Dimensions.get("window").fontScale * 13,
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