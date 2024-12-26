import { Dimensions } from 'react-native';

import { Stack } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import {Drawer} from "expo-router/drawer"
import {GestureHandlerRootView} from "react-native-gesture-handler"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"
import { useEffect } from 'react';

enableScreens()
export default function RootLayout() {
  con
  useEffect(() => {
    
  }, []);

  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
       <Stack initialRouteName='(home)'>
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="(home)" options={{headerShown: false}}/>
       </Stack>
      </Provider>
    </GluestackUIProvider>
  );
}