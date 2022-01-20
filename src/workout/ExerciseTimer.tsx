import {
  Box,
  Center,
  StatusBar,
  Text,
  Pressable,
  HStack,
  VStack,
  Divider,
  Icon,
  Stack,
  Button,
} from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";

interface Props
  extends NativeStackScreenProps<StackParamsList, "exercise-timer"> {}

export function ExerciseVideo() {
  return (
    <Box alignItems="center" bg="secondary.400" py="40" my="5" mx="10">
      <Text color="primary.900">vid/gif</Text>
    </Box>
  );
}

export function ExerciseStopwatch() {
  return (
    <>
      <Box alignItems="center" mb="5">
        <Text bold fontSize="5xl">
          02:00
        </Text>
      </Box>
      <Button
        alignSelf="center"
        borderRadius="full"
        width="60%"
        _text={{ fontSize: "xl" }}
      >
        START
      </Button>
    </>
  );
}

export function ExerciseTimer() {
  return (
    <Box height="100%" width={"100%"}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <Box>
        <ExerciseVideo/>
      </Box>
      <Box>
        <ExerciseStopwatch/>
      </Box>
    </Box>
  );
}
