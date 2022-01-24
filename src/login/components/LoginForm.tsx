import React from "react";

import { StackParamsList } from "@app/App";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import {
  Button,
  FormControl,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";

type LoginPageNavigationProp = NativeStackNavigationProp<
  StackParamsList,
  "login"
>;

export function LoginForm() {
  const navigation = useNavigation<LoginPageNavigationProp>();
  const onLoginPressed = () => {
    navigation.replace("home");
  };

  return (
    <FormControl paddingX="8">
      <VStack space="4">
        <VStack>
          <FormControl>
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
          </FormControl>
        </VStack>
        <VStack>
          <FormControl>
            <FormControl.Label _text={{ color: "primary.500", bold: true }}>
              Password
            </FormControl.Label>
            <Input
              fontSize="16"
              variant="underlined"
              borderBottomWidth="2"
              placeholder="Password"
              type="password"
              keyboardType="default"
            />
          </FormControl>
        </VStack>
        <Button
          onPress={onLoginPressed}
          borderRadius="20"
          alignSelf="center"
          mb="5"
          width="90%"
        >
          LOG IN
        </Button>
        <HStack alignSelf="center">
          <Text color="white" mr="1">
            Don't have an account?
          </Text>
          <Link
            onPress={() => navigation.navigate("sign-up")}
            isUnderlined={false}
          >
            SIGN UP HERE
          </Link>
        </HStack>
      </VStack>
    </FormControl>
  );
}
