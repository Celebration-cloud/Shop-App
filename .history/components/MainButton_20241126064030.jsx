import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (props) => {
  return (
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{ ...styles, ...props.style }}>
          <Text style={{ ...styles, ...props.style }}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({

})