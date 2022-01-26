import { HStack, Stack, VStack } from "native-base";
import React from "react";
import { WorkoutStackNavigationProps, WorkoutStackParamsList } from "@app/App";
import { useNavigation } from "@react-navigation/native";
import WorkoutListCategoryCard from "./components/WorkoutListCategoryCard";

export function WorkoutForm() {
  const navigation = useNavigation<WorkoutStackNavigationProps>();

  const onEndurancePressed = () => {
    navigation.navigate("workout-difficulty");
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      w="full"
      direction="column"
      space="4"
    >
      <HStack space={"4"}>
        <WorkoutListCategoryCard
          title="Endurance"
          onPressed={onEndurancePressed}
        />
        <WorkoutListCategoryCard title="Strength" />
      </HStack>
      <HStack space="4">
        <WorkoutListCategoryCard title="Balance" />
        <WorkoutListCategoryCard title="Flexibility" />
      </HStack>
    </Stack>
  );
}

const WorkoutListPage = () => {
  return (
    <VStack alignItems="center" justifyContent="center" h="full" w="full">
      <WorkoutForm />
    </VStack>
  );
};

export default WorkoutListPage;
