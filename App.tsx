import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SelectionScreen from "./app/(tabs)/SelectionScreen";
import CounterScreen from "./app/(tabs)/CounterScreen";
import { Platform } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={SelectionScreen}
          options={{ headerShown: Platform.OS === "ios" }}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{ headerShown: Platform.OS === "ios" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
