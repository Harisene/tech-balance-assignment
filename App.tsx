import 'react-native-gesture-handler';
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import StackNavigation from "./src/navigation/StackNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/poppins_bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/poppins_regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/poppins_medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/poppins_semibold.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
