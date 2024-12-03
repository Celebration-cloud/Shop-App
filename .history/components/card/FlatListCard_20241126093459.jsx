import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import cardComponent from './CardComponent';

const FlatListCard = (props) => {
  return (
    <View className={`px-5`}>
      <FlatList
      keyExtractor={(item, index) => index}
        data={[...props.data, props.onPressLeft, props.onPressRight]}
        renderItem={cardComponent}
        className={`w-full h-full`}
      />
    </View>
  );
};

export default FlatListCard

const styles = StyleSheet.create({})