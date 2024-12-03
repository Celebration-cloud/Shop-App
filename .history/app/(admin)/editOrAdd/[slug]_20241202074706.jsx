import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { Fragment, useState } from 'react'

import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import MenuDone from '../../../components/MenuDone'
import {addShopItem, editShopItem} from '../../../store/actions/shopActions'
import { Controller, useForm } from 'react-hook-form'

const date = Date.now()

const EditOrAddScreen = () => {
   const {
     control,
     formState: { errors },
   } = useForm({
     defaultValues: {
       id: dataItem ? dataItem.id : Date.now(),
       name: dataItem ? dataItem.name : "",
       description: dataItem ? dataItem.description : "",
       price: dataItem ? dataItem.price : Number,
       category: dataItem ? dataItem.category : "",
       imageUrl: dataItem ? dataItem.imageUrl : "",
     },
   });
  const {shopItems} = useSelector(state => state.shop)
  const {slug, data} = useLocalSearchParams()
  const dispatch = useDispatch()
  const router = useRouter()
  const dataItem = data && JSON.parse(data);
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
      router.dismiss()
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
      router.dismiss();
    }
   };
   const handleConfirm = () => { 
    Alert.alert("Confirmation", "Are you sure you want to make this change?", [
      { text: "OK", onPress: handleSubmit, style: "cancel" },
      { text: "CANCEL", style: "destructive" },
    ]);
    };
  const handleChange = (id, data) => {
    setAddProduct((prev) => {
      return {
        ...prev,
        [id]: id === "price" ? data.replace(/[^0-9.]/g, "") : data,
      };
    });
  };
  return (
    <View>
      <Stack.Screen
        options={{
          title: slug,
          headerRight: () => (
            <MenuDone onPress={handleConfirm}>
              <Ionicons name="checkmark-circle-outline" size={30} />
            </MenuDone>
          ),
        }}
      />
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.label}>Title:</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Name"
                onBlur={onBlur}
                onChangeText={onChange}
                style={styles.input}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && <Text>This is required.</Text>}
          <TextInput
            style={styles.input}
            value={addProduct.name}
            onChangeText={(itemValue) => handleChange("name", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Description: </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Description"
                onBlur={onBlur}
                onChangeText={onChange}
                style={styles.input}
                value={value}
              />
            )}
            name="description"
          />
          {errors.firstName && <Text>This is required.</Text>}
          <TextInput
            style={styles.input}
            value={addProduct.description}
            onChangeText={(itemValue) => handleChange("description", itemValue)}
          />
        </View>
        <View>
          <Text style={styles.label}>Image Url:</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Image "
                onBlur={onBlur}
                onChangeText={onChange}
                style={styles.input}
                value={value}
              />
            )}
            name="imageUrl"
          />
          {errors.firstName && <Text>This is required.</Text>}
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
                {categoryData.map((item, idx) => (
                  <Picker.Item key={idx} label={item} value={item} />
                ))}
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