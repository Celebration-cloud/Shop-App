import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (onPress) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={propsonPress}>
        <View>
          <Text>MainButton</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({})