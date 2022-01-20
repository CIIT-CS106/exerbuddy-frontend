import {
  Box,
  StatusBar,
  Text,
  Pressable,
  HStack,
} from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";
import { ScrollView } from "react-native-gesture-handler";

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

export function QuickCardJandJ(){
  return(
    <Pressable mb="4">
        {({isPressed }) => {
          return (
            <Box
              bg={isPressed ? "primary.600" : "primary.500"}
              p="5"
              rounded="2xl"
              style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            >
              <HStack space="3">
                <Box backgroundColor="secondary.800" p="10" rounded="xl"/>
                <Text color="secondary.50" bold fontSize="lg" >
                  1-min Jump and Jacks
                </Text>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
  )
}

export function QuickCardPushUps(){
  return(
    <Pressable mb="4">
        {({isPressed }) => {
          return (
            <Box
              bg={isPressed ? "primary.600" : "primary.500"}
              p="5"
              rounded="2xl"
              style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            >
              <HStack space="3">
                <Box backgroundColor="secondary.800" p="10" rounded="xl"/>
                <Text color="secondary.50" bold fontSize="lg" >
                  10 Reps of Push-Ups
                </Text>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
  )
}

export function QuickCardSitUps(){
  return(
    <Pressable mb="4">
        {({isPressed }) => {
          return (
            <Box
              bg={isPressed ? "primary.600" : "primary.500"}
              p="5"
              rounded="2xl"
              style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            >
              <HStack space="3">
                <Box backgroundColor="secondary.800" p="10" rounded="xl"/>
                <Text color="secondary.50" bold fontSize="lg" >
                  20 Reps of Sit-Ups
                </Text>
              </HStack>
            </Box>
          );
        }}
      </Pressable>
  )
}

export function HomePage() {
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
        <QuickCardJandJ/>
        <QuickCardPushUps/>
        <QuickCardSitUps/>
      </Box>
      </ScrollView>
    </Box>
  );
}
