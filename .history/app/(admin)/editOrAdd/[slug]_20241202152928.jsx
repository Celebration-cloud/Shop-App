import { Picker } from '@react-native-picker/picker'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import React, { Fragment, useState } from 'react'

import { Alert, Dimensions, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import {categoryData} from '../../../data/categoryData'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import MenuDone from '../../../components/MenuDone'
import {addShopItem, editShopItem} from '../../../store/actions/shopActions'
import { Controller, useForm } from 'react-hook-form'

const date = Date.now()

const EditOrAddScreen = () => {
  const { slug, data } = useLocalSearchParams();
  const { shopItems } = useSelector((state) => state.shop);
  const dataItem = data && JSON.parse(data);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      id: dataItem ? dataItem.id : date,
      name: dataItem ? dataItem.name : "",
      description: dataItem ? dataItem.description : "",
      price: dataItem ? dataItem.price : Number,
      category: dataItem ? dataItem.category : "",
      imageUrl: dataItem ? dataItem.imageUrl : "",
    },
  });

  const onSubmit = (addProduct) => {
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
      dispatch(addShopItem(addData))
      reset()
      router.dismiss();
    }
  };
  const handleConfirm = () => {
    Alert.alert("Confirmation", "Are you sure you want to make this change?", [
      { text: "OK", onPress: handleSubmit(onSubmit), style: "cancel" },
      { text: "CANCEL", style: "destructive" },
    ]);
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
                style={{
                  ...styles.input,
                  borderColor: errors.name ? "red" : "black",
                }}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}
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
                style={{
                  ...styles.input,
                  borderColor: errors.description ? "red" : "black",
                }}
                value={value}
              />
            )}
            name="description"
          />
          {errors.description && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}
        </View>
        <View>
          <Text style={styles.label}>Image Url:</Text>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "This is required" },
              pattern: {
                value: /^(https?:\/\/)?([\w\d-]+\.)+[\w-]+(\/[\w\d#?&=.-]*)?$/,
                message: "Enter a valid url",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Image Url"
                onBlur={onBlur}
                onChangeText={onChange}
                style={{
                  ...styles.input,
                  borderColor: errors.imageUrl ? "red" : "black",
                }}
                value={value}
              />
            )}
            name="imageUrl"
          />
          {errors.imageUrl && (
            <Text style={{ color: "red" }}>{errors.imageUrl.message}</Text>
          )}
        </View>
        {!dataItem && (
          <Fragment>
            <View>
              <Text style={styles.label}>Price:</Text>
              <Controller
                control={control}
                rules={{
                  required: { value: true, message: "This is required" },
                  pattern: { value: /^[0-9.]+$/i, message: "Must be a number" },
                  min: { value: 1, message: "Must be greater than one" },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Price"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    keyboardType="number-pad"
                    style={{
                      ...styles.input,
                      borderColor: errors.price ? "red" : "black",
                    }}
                    value={value}
                  />
                )}
                name="price"
              />
              {errors.price && (
                <Text style={{ color: "red" }}> {errors.price.message}</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Category:</Text>
              <Controller
                control={control}
                name="category"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) => onChange(itemValue)}
                    style={{
                      ...styles.category,
                      borderColor: errors.category ? "red" : "black",
                    }}
                  >
                    <Picker.Item label="Choose a category" value="" />
                    {categoryData.map((item, idx) => (
                      <Picker.Item key={idx} label={item} value={item} />
                    ))}
                  </Picker>
                )}
              />
              {errors.category && (
                <Text style={{ color: "red" }}>This is required</Text>
              )}
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