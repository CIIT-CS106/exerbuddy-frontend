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
          imageUrl="https://i.ibb.co/3rgTXds/endurance-Icon.png"
          title="Endurance"
          onPressed={onEndurancePressed}
        />
        <WorkoutListCategoryCard title="Strength" imageUrl="https://i.ibb.co/28FHGjr/strength-Icon.png" />
      </HStack>
      <HStack space="4">
        <WorkoutListCategoryCard title="Balance" imageUrl="https://i.ibb.co/Ryrh3nx/balance-Icon.png"/>
        <WorkoutListCategoryCard title="Flexibility" imageUrl="https://i.ibb.co/5BLK9wJ/flexibility-Icon.png"/>
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
