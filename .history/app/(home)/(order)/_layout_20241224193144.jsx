import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MenuBar from "../../../components/MenuBar"
import { useDispatch } from 'react-redux'
const OrderLayout = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { user, isAuth, token } = useSelector((state) => state.user);
   const fetchItems = useCallback(() => {
      dispatch(getShopItems(token));
         dispatch(getCartItems(token, user));
           dispatch(getOrderItems(token, user));
      console.log("done");
    }, [dispatch, getCartItems, getOrderItems, getShopItems]);
  
    useEffect(() => {
       navigation.addListener("state", fetchItems);
      return () => {
          navigation.removeListener("state", fetchItems);
      };
    }, [fetchItems]);
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