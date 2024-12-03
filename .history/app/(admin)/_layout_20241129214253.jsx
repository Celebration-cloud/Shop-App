import React from "react";

import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";

import MenuAddProduct from "../../components/MenuAddProduct";
import MenuIcon from "../../components/MenuBar";
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
            <MenuBar
          ),
          headerRight: () => <MenuAddProduct />,
        }}
      />
    </Stack>
  );
};

export default AdminLayout;

const styles = StyleSheet.create({});
