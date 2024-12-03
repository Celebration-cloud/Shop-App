import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (props) => {
  return (
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles.container, ...props.style }}>
          <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
  );
}

export default MainButton

const styles = StyleSheet.create({

})