import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return <GluestackUIProvider mode="system"><Stack screenOptions={{title: "Home", headerTitleAlign: "center"}}>
    </Stack></GluestackUIProvider>;
}
