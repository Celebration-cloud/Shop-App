import { Stack } from 'expo-router';

import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

import store from "../store/storeConfig"

import "react-native-get-random-values";

enableScreens()
export default function RootLayout() {
  

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
