import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { registerRootComponent } from "expo";

import { LoginPage } from "../login/LoginPage";
import { SignUpPage } from "../signup/SignUpPage";

export type StackParamsList = {
  login: undefined;
  "sign-up": undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            options={{ headerShown: false }}
            name="login"
            component={LoginPage}
          />
          <Stack.Screen name="sign-up" component={SignUpPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default registerRootComponent(App);
