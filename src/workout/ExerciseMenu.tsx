import { Box, StatusBar, Text, Button } from "native-base";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import App, { WorkoutStackParamsList } from "@app/App";
import { useNavigation } from "@react-navigation/native";
type WorkoutPageNavigationProp = NativeStackNavigationProp<
  WorkoutStackParamsList,
  "exercise-menu"
>;
interface Props
  extends NativeStackScreenProps<WorkoutStackParamsList, "exercise-menu"> {}

export function ExerciseTitle() {
  return (
    <Box py="9" px="5" backgroundColor={"primary.500"}>
      <Text color="secondary.50" bold fontSize={"xl"}>
        Endurance - Beginner
      </Text>
    </Box>
  );
}

export function ExerciseStats() {
  return (
    <Box
      py="2"
      px="5"
      borderBottomWidth={"1"}
      borderBottomColor={"primary.500"}
    >
      <Text color="secondary.900" fontSize={"sm"}>
        10 Minutes | Calorie Loss: ## calories
      </Text>
    </Box>
  );
}

export function ExerciseList() {
  const navigation = useNavigation<WorkoutPageNavigationProp>();
  const onButtonPressed = () => {
    navigation.navigate("exercise-timer");
  };
  return (
    <>
      <Box py="7" px="5">
        <Text fontSize={"3xl"} pb="7">
          1. 10-Rep Push-Ups
        </Text>
        <Text fontSize={"3xl"} pb="7">
          2. 10-Rep Sit-Ups
        </Text>
        <Text fontSize={"3xl"} pb="7" color={"primary.500"}>
          3. 2-min Plank
        </Text>
      </Box>
      <Button
        onPress={onButtonPressed}
        borderRadius="full"
        alignSelf="center"
        mb="5"
        width="80%"
        _text={{ fontSize: "lg" }}
      >
        START
      </Button>
    </>
  );
}

export function ExerciseMenu() {
  return (
    <Box>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <Box>
        <ExerciseTitle />
      </Box>
      <Box>
        <ExerciseStats />
      </Box>
      <Box>
        <ExerciseList />
      </Box>
    </Box>
  );
}
