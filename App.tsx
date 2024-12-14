import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SelectionScreen from "./app/(tabs)/SelectionScreen";
import CounterScreen from "./app/(tabs)/CounterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SelectionScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
