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
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StackParamsList } from "@app/App";

interface Props extends NativeStackScreenProps<StackParamsList, "login"> {}

export function LoginPage({ navigation, ...restProps }: Props) {
  return (
    <Box bg="#242426" height="100%" width="100%">
      <Box alignItems="center">
        <Box width="70%" height="50%">
          <Image
            source={require("../image/logoWName.png")}
            w="100%"
            h="100%"
            resizeMode={"contain"}
            alt="Alternate Text"
          />
        </Box>
        <Box width="100%">
          <FormControl paddingX="8">
            <VStack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary", bold: true }}>
                  Email Address
                </FormControl.Label>
                <Input
                  variant="underlined"
                  fontSize="16"
                  borderColor="primary"
                  color="white"
                  borderBottomWidth="2"
                  placeholder="first.last@mail.com"
                  selectionColor="primary"
                  keyboardType="email-address"
                />
              </Stack>
              <Stack mb="5">
                <FormControl.Label _text={{ color: "primary", bold: true }}>
                  Password
                </FormControl.Label>
                <Input
                  variant="underlined"
                  fontSize="16"
                  borderColor="primary"
                  color="white"
                  borderBottomWidth="2"
                  placeholder="Password"
                  selectionColor="primary"
                  type="password"
                />
              </Stack>
              <Stack>
                <Button
                  bg="primary"
                  borderRadius="20"
                  width="90%"
                  alignSelf="center"
                  mb="5"
                  _text={{ color: "#ffffff", bold: true }}
                >
                  LOG IN
                </Button>
              </Stack>
              <HStack alignSelf="center">
                <Text color="#ffffff" mr="1">
                  Don't have an account?
                </Text>
                <Link
                  onPress={() => navigation.navigate("sign-up")}
                  textDecoration={"none"}
                  _text={{ color: "primary", bold: true }}
                >
                  SIGN UP HERE
                </Link>
              </HStack>
            </VStack>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
