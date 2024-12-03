import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (props) => {
  return (
    <View>
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={{...styles, ...props.style}}>
          <Text>{props.chil</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default MainButton

const styles = StyleSheet.create({

})