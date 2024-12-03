import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = (props) => {
  return (
    <View className={`px-5`}>
      <FlatList
        data={[...props.data, props]}
        renderItem={cardComponent}
        onPressLeft={props.onPressLeft}
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})