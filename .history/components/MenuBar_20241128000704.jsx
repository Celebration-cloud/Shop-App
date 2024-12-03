import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from 'expo-router'

const MenuBar = (props) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={() => navigation.openD}>
      <Ionicons name="menu-sharp" size={25} />
    </TouchableOpacity>
  );
}

export default MenuBar

const styles = StyleSheet.create({})