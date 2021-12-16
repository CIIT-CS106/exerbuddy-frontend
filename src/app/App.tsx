import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { registerRootComponent } from "expo";
import { Provider as ReduxProvider } from "react-redux";

import { LoginPage } from "../login/LoginPage";
import { SignUpPage } from "../signup/SignUpPage";
import { store } from "./store";
import theme from "../theme";

export type StackParamsList = {
  login: undefined;
  "sign-up": undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider theme={theme}>
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
    </ReduxProvider>
  );
}
export default registerRootComponent(App);
