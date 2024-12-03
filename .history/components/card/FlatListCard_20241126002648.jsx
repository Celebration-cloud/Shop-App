import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListCard = ({
  buttonLeft,
  onPressLeft,
  data,
  buttonRight,
  onPressRight,
}) => {
  return (
    <View className={`p-5`}>
      <FlatList data={data} renderItem={} buttonLeft={buttonLeft} className={`h-full`} />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})