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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "@app/App";
import {
  BaseRouter,
  NavigationHelpersContext,
  TabRouter,
} from "@react-navigation/native";

interface Props extends NativeStackScreenProps<StackParamsList, "workout"> {}

export function WorkoutDifficultyForm() {
  return (
    <FormControl paddingX="8">
      <VStack>
        <HStack alignItems="flex-start" mt="120"></HStack>
        <VStack space={1} alignItems="center" mb={50}>
          <Text fontSize="2xl" color="#fff">
            CHOOSE A DIFFICULTY
          </Text>
        </VStack>
        <Stack>
          <Button borderRadius="20" alignSelf="center" mb="5" width="60%">
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

export function WorkoutDifficulty() {
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
          <WorkoutDifficultyForm />
        </Box>
      </Box>
    </Box>
  );
}
