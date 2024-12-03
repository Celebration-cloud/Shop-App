import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Stack } from "expo-router";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuIcon from "../../components/MenuIcon";

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
          headerLeft: () => <Menu />,
          headerRight: () => <MenuAddProduct />,
        }}
      />
    </Stack>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});
