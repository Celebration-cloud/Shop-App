import React from "react";

import { StyleSheet } from "react-native";

import { Stack } from "expo-router";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuBar from "../../components/MenuBar";

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
          headerLeft: () => (
            <MenuBar />
          ),
          headerRight: () => <MenuAddProduct />,
        }}
      />
      <Stack.Screen
        name="editOr"
        options={{
          title: "Admin",
          headerLeft: () => (
            <MenuBar />
          ),
          headerRight: () => <MenuAddProduct />,
        }}
      />
    </Stack>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});