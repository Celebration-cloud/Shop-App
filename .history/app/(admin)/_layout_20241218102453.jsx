import React from "react";

import { StyleSheet } from "react-native";

import { Stack, useNavigation } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuBar from "../../components/MenuBar";
import MenuDone from "../../components/MenuDone";

const AdminLayout = () => {
   const dispatch = useDispatch();
    const navigation = useNavigation();

    const fetchShoppingItems = useCallback(() => {
      dispatch(getShopItems());
      console.log("done");
    }, [dispatch]);

    useEffect(() => {
       navigation.addListener("focus", fetchShoppingItems);

      return () => {
        navigation.removeListener("focus", fetchShoppingItems);
      };
    }, [fetchShoppingItems]);
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="admin"
        options={{
          title: "Admin",
          headerLeft: () => <MenuBar />,
          headerRight: () => (
            <MenuAddProduct>
              <Ionicons name="add-circle-outline" size={30} />
            </MenuAddProduct>
          ),
        }}
      />
      <Stack.Screen
        name="editOrAdd/[slug]"
       
      />
    </Stack>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});
