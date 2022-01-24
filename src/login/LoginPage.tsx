import { Box, Image, StatusBar } from "native-base";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";
import { SignUpPage } from "src/signup/SignUpPage";

import { LoginForm } from "./components/LoginForm";

interface Props extends NativeStackScreenProps<StackParamsList, "login"> {}

export function Logo() {
  return (
    <Image
      source={require("../image/logoWName.png")}
      w="100%"
      h="100%"
      resizeMode={"contain"}
      alt="Alternate Text"
    />
  );
}

export function LoginPage({ navigation, ...restProps }: Props) {
  return (
    <Box bg="secondary.800" height="100%" width="100%" safeArea>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <Box alignItems="center">
        <Box width="70%" height="50%">
          <Logo />
        </Box>
        <Box width="100%">
          <LoginForm />
        </Box>
      </Box>
    </Box>
  );
}
