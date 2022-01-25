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
  VStack,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeTabParamsList, StackParamsList,WorkoutStackParamsList } from "@app/App";
import {
  BaseRouter,
  NavigationHelpersContext,
  TabRouter,
  useNavigation,
} from "@react-navigation/native";
import WorkoutCategoryCard from "./components/WorkoutCategoryCard";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

interface Props extends NativeStackScreenProps<WorkoutStackParamsList, "workouts"> {}

// export type WorkoutStackParamsList = {
//   workoutDifficulty: undefined;
//   workoutTimer: undefined;
//   workoutExercise: undefined;
// };

export function WorkoutForm() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      w="full"
      direction="column"
      space="4"
    >
      <HStack space={"4"}>
        <WorkoutCategoryCard title="Endurance" />
        <WorkoutCategoryCard title="Strength" />
      </HStack>
      <HStack space="4">
        <WorkoutCategoryCard title="Balance" />
        <WorkoutCategoryCard title="Flexibility" />
      </HStack>
    </Stack>
  );
}

export function WorkoutPage() {
  return (
    <VStack alignItems="center" justifyContent="center" h="full" w="full">
      <WorkoutForm />
    </VStack>
  );
}
