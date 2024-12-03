import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'

import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import MenuDone from '../../../components/MenuDone'
const EditOrAddScreen = (props) => {
  const {shopItems} = useSelector(state => state.shop)
  const {slug, data} = useLocalSearchParams()
  const dataItem = data && JSON.parse(data);
  console.log(dataItem.price)
  const [addProduct, setAddProduct] = useState({
    name: dataItem ? dataItem.name : "",
    description: dataItem ? dataItem.description : "",
    price: dataItem ? dataItem.price : undefined,
    category: dataItem ? dataItem.category : "",
    imageUrl: dataItem ? dataItem.imageUrl : "",
  });

  const handleSubmit = () => { 
    if(dataItem){
      const editData = shopItems.map((item) => {
        item.id === dataItem.id ? {return: [...item, ...addProduct]} : item;
      })
      console.log(editData);
    }
    console.log(addProduct)
   };
  const handleChange = (id, data) => { 
    setAddProduct((prev) => {
      return { ...prev, [id]: id === "price" ? data.replace(/[^0-9.]/g, "") : data };
    });
   };
  return (
    <View>
      <Stack.Screen
        options={{
          title: slug,
          headerRight: () => (
            <MenuDone onPress={handleSubmit}>
              <Ionicons name="checkmark-circle-outline" size={30} />
            </MenuDone>
          ),
        }}
      />
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
        {!dataItem && (

        )}
        
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