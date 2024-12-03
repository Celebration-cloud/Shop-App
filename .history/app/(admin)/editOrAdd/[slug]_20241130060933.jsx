import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";

const EditOrAddScreen = (props) => {
  const {slug, data} = useLocalSearchParams()
  const [addProduct, setAddProduct] = useState({
    name: data?.name && "",
    description: data?.description && "",
    price: data?.price && "",
    category: data?.category && "",
    imageUrl: data?.imageUrl && "",
  });
  return (
    <View>
      <Stack.Screen options={{title: slug}}/>
      <View>
        <View>
          <Text></Text>
          <TextInput />
        </View>
        <View>
          <Text></Text>
          <TextInput />
        </View>
        <View>
          <Text></Text>
          <TextInput />
        </View>
        <View>
          <Text></Text>
          <TextInput />
        </View>
      </View>
    </View>
  )
}

export default EditOrAddScreen

const styles = StyleSheet.create({})