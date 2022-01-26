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
  Image,
} from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import App, { WorkoutStackParamsList } from "@app/App";
import { WorkoutTimer } from "./components/WorkoutTimer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  pauseTimer,
  resetTimer,
  selectWorkoutTimer,
  startTimer,
  stopTimer,
} from "./workoutTimerSlice";

interface Props
  extends NativeStackScreenProps<WorkoutStackParamsList, "workout-start"> {}

export function ExerciseVideo() {
  return <Center>
      <Image
      source={require("../image/workoutPlank.gif")}
      size={350}
      my="5" 
      mx="10"
      />
  </Center>
}

export function ExerciseStopwatch() {
  const workoutTimerState = useAppSelector(selectWorkoutTimer);
  const dispatch = useAppDispatch();

  const onStartPressed = () => {
    if (workoutTimerState.isRunning) {
      dispatch(stopTimer());
      return;
    }
    dispatch(startTimer());
  };

  return (
    <>
      <WorkoutTimer />
      <Button
        onPress={onStartPressed}
        alignSelf="center"
        borderRadius="full"
        width="60%"
        _text={{ fontSize: "xl" }}
      >
        {workoutTimerState.isRunning ? "Pause" : "Start"}
      </Button>
    </>
  );
}

export function WorkoutPage({ navigation, route }: Props) {
  const dispatch = useAppDispatch();
  const { durationMs } = route.params;

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      dispatch(stopTimer());
    });
  }, [navigation, dispatch]);

  useEffect(() => {
    dispatch(resetTimer(durationMs));
  }, [dispatch]);

  return (
    <Box height="100%" width={"100%"}>
      <StatusBar
        animated={true}
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <Box>
        <ExerciseVideo />
      </Box>
      <Box>
        <ExerciseStopwatch />
      </Box>
    </Box>
  );
}

export default WorkoutPage;
