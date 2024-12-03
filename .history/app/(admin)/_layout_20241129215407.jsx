import React from "react";

import { StyleSheet } from "react-native";

import { Stack } from "expo-router";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuBar from "../../components/MenuBar";
import { Ionicons } from "@expo/vector-icons";

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
          headerRight: () => <MenuIcon><Ionicons name="ad" size={30}/></MenuIcon>,
        }}
      />
      <Stack.Screen
        name="editOrAdd/[slug]"
        options={{
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
