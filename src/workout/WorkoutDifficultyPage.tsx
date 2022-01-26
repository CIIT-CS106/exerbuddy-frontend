import {
  Box,
  Center,
  Text,
  Stack,
  FormControl,
  Button,
  Link,
  HStack,
  VStack,
  StatusBar,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { WorkoutStackParamsList } from "@app/App";
import {
  BaseRouter,
  NavigationHelpersContext,
  TabRouter,
  useNavigation,
} from "@react-navigation/native";
import theme from "../theme";
type WorkoutPageNavigationProp = NativeStackNavigationProp<
  WorkoutStackParamsList,
  "workout-difficulty"
>;
interface Props
  extends NativeStackScreenProps<
    WorkoutStackParamsList,
    "workout-difficulty"
  > {}

export function WorkoutDifficultyForm() {
  const navigation = useNavigation<WorkoutPageNavigationProp>();
  const onButtonPressed = () => {
    navigation.navigate("workout-details");
  };
  return (
    <FormControl paddingX="8">
      <VStack>
        <HStack alignItems="flex-start" mt="120"></HStack>
        <VStack space={1} alignItems="center" mb={50}>
          <Text fontSize="2xl" color="secondary.900">
            CHOOSE A DIFFICULTY
          </Text>
        </VStack>
        <Stack>
          <Button
            onPress={onButtonPressed}
            borderRadius="20"
            alignSelf="center"
            mb="5"
            width="60%"
          >
            BEGINNER
          </Button>
        </Stack>

        <Stack>
          <Button borderRadius="20" alignSelf="center" mb="5" width="60%">
            INTERMEDIATE
          </Button>
        </Stack>

        <Stack>
          <Button borderRadius="20" alignSelf="center" mb="5" width="60%">
            ADVANCED
          </Button>
        </Stack>
      </VStack>
    </FormControl>
  );
}

export function WorkoutDifficultyPage() {
  const { colors } = theme;
  return (
    <Box bg={colors.secondary["50"]} height="100%" width="100%" safeArea>
      <Box alignItems="center">
        <Box width="100%">
          <WorkoutDifficultyForm />
        </Box>
      </Box>
    </Box>
  );
}
