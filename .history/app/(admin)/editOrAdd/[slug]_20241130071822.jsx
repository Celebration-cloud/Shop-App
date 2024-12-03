import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
import { useSelector } from 'react-redux'
const EditOrAddScreen = (props) => {
  const {shopItems} = useSelector(state => state.shop)
  const {slug, data} = useLocalSearchParams()
  const dataItem = data && JSON.parse(data);

  const [addProduct, setAddProduct] = useState({
    name: dataItem?.name ? dataItem?.name : "",
    description: dataItem?.description ? dataItem?.description : "",
    price: dataItem?.price ? parseInt(dataItem?.price) : Number,
    category: dataItem?.category ? dataItem?.category : "",
    imageUrl: dataItem?.imageUrl ? dataItem?.imageUrl : "",
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
            style={styles.input}
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
    padding: Dimensions.get("window").scale * 7,
    gap: Dimensions.get("window").scale * 5,
  },
  label: {
    fontSize: Dimensions.get("window").scale * 7,
    fontWeight: "heavy",
  },
  input: {
    borderBottomWidth: 2,
    height: Dimensions.get("window").height / 15,
    fontSize: Dimensions.get("window").scale * 6,
  },
  category: {

  }
});