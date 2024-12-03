import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Stack, useNavigation } from "expo-router";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuIcon from "../../components/MenuIcon";
import { Ionicons } from "@expo/vector-icons";

const AdminLayout = () => {
  const navigation = useNavigation();
  const handleMenu = () => {
    navigation.openDrawer();
  };
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
          headerLeft: () => (
            <MenuIcon onPress={handleMenu}>
              <Ionicons name="menu-sharp" size={25} />
            </MenuIcon>
          ),
          headerRight: () => <MenuAddProduct />,
        }}
      />
    </Stack>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});
