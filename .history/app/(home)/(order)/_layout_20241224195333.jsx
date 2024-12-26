import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Stack, useNavigation } from 'expo-router'
import MenuBar from "../../../components/MenuBar"
import { useDispatch, useSelector } from 'react-redux'
import { getOrderItems } from '../../../store/actions/shopActions'
const OrderLayout = () => {
     const dispatch = useDispatch();
     const navigation = useNavigation();
     const { user, isAuth, token } = useSelector((state) => state.user);
   const fetchItems = useCallback(() => { dispatch(getOrderItems(token, user)); console.log('done'); }, [dispatch, token, user]); useFocusEffect( useCallback(() => { fetchItems(); }, [fetchItems]) );
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="order"
        options={{
          title: "Your Orders",
          headerLeft: () => <MenuBar />,
        }}
      />
    </Stack>
  );
}

export default OrderLayout

const styles = StyleSheet.create({})