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

  export function Workout(){
      return(
        <Box bg="secondary.800" height="100%" width="100%" safeArea/>
      );
  }