import { Stack } from "expo-router";
import "@/global.css"
import {useFonts} from "expo-font"
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-BoldItalic": require("../assets/fonts/Ubuntu-BoldItalic.ttf"),
    "Ubuntu-LightItalic": require("../assets/fonts/Ubuntu-LightItalic.ttf")
  })
  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }

  }, [fontsLoaded]);

  if(!fontsLoaded) return null;
  return <Stack screenOptions={{headerShown:false}} />;
}
