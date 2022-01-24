import { Box, StatusBar, Text, Pressable, HStack } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";
import { ScrollView } from "react-native-gesture-handler";
import { HomeExerciseCard } from "./components/HomeExerciseCard";

interface Props extends NativeStackScreenProps<StackParamsList, "home"> {}

export function CaloriesGraph() {
  return (
    <>
      <Text color="secondary.900" my="2" bold fontSize="20">
        Total Calories Lost
      </Text>
      <Box alignItems="center" bg="secondary.900" py="24">
        <Text color="primary.400">GRAPH</Text>
      </Box>
    </>
  );
}

export function QuickExercises() {
  return (
    <>
      <Box>
        <Text color="secondary.900" my="2" bold fontSize="20">
          Quick Exercises
        </Text>
      </Box>
    </>
  );
}

export function HomePage() {
  const exerciseList = [
    "1-min Jump and Jacks",
    "10 Reps of Push-Ups",
    "20 Reps of Sit-Ups",
  ];

  const renderExerciseCards = () => {
    return exerciseList.map((exercise, i) => (
      <HomeExerciseCard title={exercise} key={i} />
    ));
  };

  return (
    <Box>
      <ScrollView>
        <StatusBar
          animated={true}
          translucent={true}
          barStyle={"light-content"}
          backgroundColor={"#252527"}
        />
        <Box mx="5">
          <CaloriesGraph />
        </Box>
        <Box mx="5">
          <QuickExercises />
          {renderExerciseCards()}
        </Box>
      </ScrollView>
    </Box>
  );
}
