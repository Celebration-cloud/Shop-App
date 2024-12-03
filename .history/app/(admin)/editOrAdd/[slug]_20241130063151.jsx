import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

const EditOrAddScreen = (props) => {
  const {slug, data} = useLocalSearchParams()
  const [addProduct, setAddProduct] = useState({
    name: data?.name && "",
    description: data?.description && "",
    price: data?.price && "",
    category: data?.category && "",
    imageUrl: data?.imageUrl && "",
  });

  const handleChange = (id, data) => { 
    setAddProduct((prev) => {
      return { ...prev, [id]: data };
    });
   };
  return (
    <View>
      <Stack.Screen options={{ title: slug }} />
      <View>
        <View>
          <Text>Title:</Text>
          <TextInput
            value={addProduct.name}
            onChangeText={(itemValue) => handleChange("name", itemValue)}
          />
        </View>
        <View>
          <Text>Description: </Text>
          <TextInput
            value={addProduct.description}
            onChangeText={(itemValue) => handleChange("description", itemValue)}
          />
        </View>
        <View>
          <Text>Image Url:</Text>
          <TextInput
            value={addProduct.imageUrl}
            onChangeText={(itemValue) => handleChange("imageUrl", itemValue)}
          />
        </View>
        <View>
          <Text>Price:</Text>
          <TextInput
            value={addProduct.name}
            onChangeText={(itemValue) => handleChange("name", itemValue)}
          />
        </View>
        <View>
          <Text>Category</Text>
          <Picker
            onValueChange={(itemValue) =>
              setAddProduct((prev) => {
                return { ...prev, category: itemValue };
              })
            }
          >
            <Picker.Item label="Select a category" value="" />
            <Picker.Item label="Select a category" value="" />
            <Picker.Item label="Select a category" value="" />
            <Picker.Item label="Select a category" value="" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

export default EditOrAddScreen

const styles = StyleSheet.create({})