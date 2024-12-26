import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import 'react-native-get-random-values';
import { enableScreens } from 'react-native-screens';
import {Drawer} from "expo-router/drawer"
import {GestureHandlerRootView} from "react-native-gesture-handler"

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"
import { Dimensions } from 'react-native';
import { Stack } from 'expo-router';

enableScreens()
export default function RootLayout() {

  return (
    <GluestackUIProvider mode="system">
      <Provider store={store}>
       <Stack>
      </Provider>
    </GluestackUIProvider>
  );
}
