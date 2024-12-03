import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
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
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Title:</Text>
          <TextInput
            value={addProduct.name}
            onChangeText={(itemValue) => handleChange("name", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Description: </Text>
          <TextInput
            style={styles.input}
            value={addProduct.description}
            onChangeText={(itemValue) => handleChange("description", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Image Url:</Text>
          <TextInput
            style={styles.input}
            value={addProduct.imageUrl}
            onChangeText={(itemValue) => handleChange("imageUrl", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Price:</Text>
          <TextInput
            style={styles.input}
            value={addProduct.price}
            keyboardType="number-pad"
            onChangeText={(itemValue) => handleChange("price", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Category:</Text>
          <Picker
            onValueChange={(itemValue) =>
              setAddProduct((prev) => {
                return { ...prev, category: itemValue };
              })
            }
            selectedValue={addProduct.category}
            style={styles.category}
          >
            <Picker.Item label={categoryData[0]} value={categoryData[0]} />
            <Picker.Item label={categoryData[1]} value={categoryData[1]} />
            <Picker.Item label={categoryData[2]} value={categoryData[2]} />
            <Picker.Item label={categoryData[3]} value={categoryData[3]} />
            <Picker.Item label={categoryData[4]} value={categoryData[4]} />
            <Picker.Item label={categoryData[5]} value={categoryData[5]} />
            <Picker.Item label={categoryData[6]} value={categoryData[6]} />
          </Picker>
        </View>
      </View>
    </View>
  );
}

export default EditOrAddScreen

const styles = StyleSheet.create({
  formContainer: {
    padding: Dim
  },
})