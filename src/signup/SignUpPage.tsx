import { 
  Box,
  Center,
  Text,
  Input,
  Stack,
  FormControl,
  Button,
  Link,
  HStack,
  VStack,
  StatusBar,
  NativeBaseProvider,
  Checkbox
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "@app/App";
import { BaseRouter, NavigationHelpersContext, TabRouter } from "@react-navigation/native";

interface Props extends NativeStackScreenProps<StackParamsList, "sign-up"> {}

export function SignUpForm({ navigation, ...restProps }: Props){

  return(
    <FormControl paddingX="8">
            <VStack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  First Name
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="First"

                />
              </Stack>

              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  Last Name
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="Last"        
                />
              </Stack>

              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  Email Address
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="first.last@email.com"
                  
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
                  placeholder="***********"
                  type="password"
                  
                />
              </Stack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary.500", bold: true }}>
                  Confirm Password
                </FormControl.Label>
                <Input
                  fontSize="16"
                  variant="underlined"
                  borderBottomWidth="2"
                  keyboardType="email-address"
                  placeholder="***********"
                  type="password"
                  
                />
              </Stack>
              <HStack alignItems="flex-start" mb="5">
              
                <Checkbox value="test" accessibilityLabel="Testing" color="#40a69d" mr="5"/>
                <Text color="#fff" mr="1">
                  I agree to the
                  </Text>
                  < Text color="#2e817a">
                  Terms and Conditions
                  </Text>
              </HStack>
              <Stack>
                <Button
                  onPress={() => navigation.navigate("signup-gender")}
                  borderRadius="20"
                  alignSelf="center"
                  mb="5"
                  width="90%"
                >
                  CREATE ACCOUNT
                </Button>
              </Stack>

            </VStack>
          </FormControl>
  )
}



export function SignUpPage({ navigation, ...restProps }: Props) {
  return (
    <Box bg="secondary.800" height="100%" width="100%" safeArea>
      <StatusBar animated={true} translucent={true} barStyle={"light-content"} backgroundColor={"#2e817a"}/>
      <Box alignItems="center">
        <Box width="100%">
          <SignUpForm navigation={navigation} {...restProps} />
        </Box>
      </Box>
    </Box>
  )
}
