import {
  HStack,
  Stack,
  Center,
  Heading,
  NativeBaseProvider,
  Box,
  AspectRatio,
  Image,
  Text,
  StatusBar,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "@app/App";
import {
  BaseRouter,
  NavigationHelpersContext,
  TabRouter,
} from "@react-navigation/native";

interface Props extends NativeStackScreenProps<StackParamsList, "workout"> {}

export function WorkoutForm() {
  return (
    <Center>
      <Stack space={5} alignItems="flex-start" mt="50">
        <HStack space={3} alignItems="center">
          <Center //first tab
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            h="40"
            w="40"
            bg="#40a69d"
            rounded="md"
            shadow={3}
          >
            Endurance
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="lg"
            />
          </Center>

          <Center //second tab
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            h="40"
            w="40"
            bg="#40a69d"
            rounded="md"
            shadow={3}
          >
            Strength
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="lg"
            />
          </Center>
        </HStack>
        <HStack space={3} alignItems="center">
          <Center //first tab
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            h="40"
            w="40"
            bg="#40a69d"
            rounded="md"
            shadow={3}
          >
            Balance
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="lg"
            />
          </Center>

          <Center //second tab
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            h="40"
            w="40"
            bg="#40a69d"
            rounded="md"
            shadow={3}
          >
            Flexibility
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="lg"
            />
          </Center>
        </HStack>
      </Stack>
    </Center>
  );
}

export function Workout() {
  return (
    <Box bg="secondary.800" height="100%" width="100%" safeArea>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <Box alignItems="center">
        <Box width="100%">
          <WorkoutForm />
        </Box>
      </Box>
    </Box>
  );
}
