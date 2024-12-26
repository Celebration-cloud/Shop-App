import React from "react";

import { StyleSheet } from "react-native";

import { Stack, useNavigation } from "expo-router";

import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuBar from "../../components/MenuBar";
import MenuDone from "../../components/MenuDone";
import { getShopItems } from "../../store/actions/shopActions";

const AdminLayout = () => {

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