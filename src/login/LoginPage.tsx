import {
  Box,
  Center,
  Text,
  Image,
  Input,
  Stack,
  FormControl,
  Button,
  Link,
  HStack,
  VStack,
  StatusBar
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";
import { SignUpPage } from "src/signup/SignUpPage";
import { BaseRouter, NavigationHelpersContext, TabRouter } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<StackParamsList, "login"> {}


export function Logo(){
  return(
    <Image
            source={require("../image/logoWName.png")}
            w="100%"
            h="100%"
            resizeMode={"contain"}
            alt="Alternate Text"
    />
  )  
}

export function LoginForm({ navigation, ...restProps }: Props){
  return(
    <FormControl paddingX="8">
            <VStack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  Email Address
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="first.last@mail.com"
                />
              </Stack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  Password
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="Password"
                  type="password"
                  
                />
              </Stack>
              <Stack>
                <Button
                  borderRadius="20"
                  alignSelf="center"
                  mb="5"
                  width="90%"
                >
                  LOG IN
                </Button>
              </Stack>
              <HStack alignSelf="center">
                <Text color="white" mr="1">
                  Don't have an account?
                </Text>
                <Link
                  onPress={() => navigation.navigate("sign-up")}
                  isUnderlined = {false}
                >
                  SIGN UP HERE
                </Link>
              </HStack>
            </VStack>
    </FormControl>
  )
}

export function LoginPage({ navigation, ...restProps }: Props) {
  return (
    <Box bg="secondary.800" height="100%" width="100%" safeArea>
      <StatusBar animated={true} translucent={true} barStyle={"light-content"} backgroundColor={"#252527"}/>
      <Box alignItems="center">
        <Box width="70%" height="50%">
          <Logo/>
        </Box>
        <Box width="100%">
          <LoginForm navigation={navigation} {...restProps}/>
        </Box>
      </Box>
    </Box>
  );
}
