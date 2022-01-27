import { Box, StatusBar, Text, Pressable, HStack } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { HomeTabParamsList, StackParamsList } from "@app/App";
import { ScrollView } from "react-native-gesture-handler";
import { HomeExerciseCard } from "./components/HomeExerciseCard";
import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

interface Props extends BottomTabScreenProps<HomeTabParamsList, "landing"> {}

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

const HomePage = ({ navigation }: Props) => {
  const exerciseList = [
    "1-min Jump and Jacks",
    "10 Reps of Push-Ups",
    "20 Reps of Sit-Ups",
  ];

  const linkList=[
    "https://media2.giphy.com/media/7VBxeliXOHQE2Erp1Z/giphy.gif",
    "https://media1.giphy.com/media/KhIrxXZbeKG8R4yNNz/giphy.gif",
    "https://media2.giphy.com/media/vwbNHCddHpc7SEWvme/giphy.gif",
  ];

  const renderExerciseCards = () => {
    return exerciseList.map((exercise, i) => (
      <HomeExerciseCard title={exercise} key={i} />
    ));
  };

  return (
    <Box>
      <ScrollView>
        <Box mx="5">
          <CaloriesGraph />
        </Box>
        <Box mx="5">
          <QuickExercises />
          <HomeExerciseCard 
          title="1-min Jump and Jacks" 
          imageUrl="https://media2.giphy.com/media/HKTtspvYD8reGjtk6X/giphy.gif"
          />
          <HomeExerciseCard 
          title="10 Reps of Push-Ups" 
          imageUrl="https://media1.giphy.com/media/kMJeCB6mShwO8kCE49/giphy.gif"
          />
          <HomeExerciseCard 
          title="20 Reps of Sit-Ups" 
          imageUrl="https://media0.giphy.com/media/AeAJE2zHgnup7DyDxL/giphy.gif?"
          />
          
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomePage;
