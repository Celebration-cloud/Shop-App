import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (props) => {
  return (
    <View>
        <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles.container, ...props.style }}>
          <Text style={{ ...styles.text, ...props.text }}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
      
  );
}

export default MainButton

const styles = StyleSheet.create({
    content: {}
    container: {

    }
})