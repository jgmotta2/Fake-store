import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/login-screen";
import { Header } from "./src/components/header";
import { HomeScreen } from "./src/screens/home-screen";
import { GroupInfoScreen } from "./src/screens/group-info-screen";
import { ProductDetailsScreen } from "./src/screens/product-details-screen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Produtos"
        component={HomeScreen}
        options={{
          header: Header,
        }}
      />
      <Stack.Screen
        name="Login"
        options={{
          header: null,
        }}
        component={LoginScreen}
      />
      <Stack.Screen name="GroupInfo" component={GroupInfoScreen} />
      <Stack.Screen
        options={{
          headerTitle: "Detalhes do Produto",
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
