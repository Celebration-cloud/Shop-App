import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const MainButton = (props) => {
  return (
    <View style={styles.content}>
        <TouchableNativeFeedback onPress={props.onPress}>
        <View {...props} style={{ ...styles.container, ...props.style }}>
          <Text style={{ ...styles.text, ...props.text }}>{props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
      
  );
}

export default MainButton

const styles = StyleSheet.create({
    content: {
        borderRadius: 20,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    container: {
        borderRadius: 20,
    },
    text: {
        textAlign: "center",
    }
})