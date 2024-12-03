import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { Fragment, useState } from 'react'

import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import MenuDone from '../../../components/MenuDone'
import {addShopItem, editShopItem} from '../../../store/actions/shopActions'

const date = Date.now()
const EditOrAddScreen = () => {
  const {shopItems} = useSelector(state => state.shop)
  const {slug, data} = useLocalSearchParams()
  const dispatch = useDispatch()
  const dataItem = data && JSON.parse(data);
  console.log(dataItem)
  const [addProduct, setAddProduct] = useState({
    id: dataItem ? dataItem.id : Date.now(),
    name: dataItem ? dataItem.name : "",
    description: dataItem ? dataItem.description : "",
    price: dataItem ? dataItem.price : Number,
    category: dataItem ? dataItem.category : "",
    imageUrl: dataItem ? dataItem.imageUrl : "",
  });

  const handleSubmit = () => { 
    if(dataItem){
      const editData = shopItems.map((item) => 
        item.id === addProduct.id
          ? {
                ...item,
                name: addProduct.name,
                description: addProduct.description,
                imageUrl: addProduct.imageUrl,
              }
              
          : item
      );
      dispatch(editShopItem(editData))
      console.log(editData)
    }else if(!dataItem){
      const addData = [...shopItems, { ...addProduct, price: parseInt(addProduct.price) }];
      setAddProduct({
        id: dataItem ? dataItem.id : date,
        name: dataItem ? dataItem.name : "",
        description: dataItem ? dataItem.description : "",
        price: dataItem ? dataItem.price : Number,
        category: dataItem ? dataItem.category : "",
        imageUrl: dataItem ? dataItem.imageUrl : "",
      });
      dispatch(addShopItem(addData))
      console.log(addData.length);
    }
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
            <MenuDone onPress={() => Alert.alert("Confirmation", "Are you su") handleSubmit}>
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
          <Fragment>
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
          </Fragment>
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