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
} from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import App, { StackParamsList } from "@app/App";
import {
    BaseRouter,
    NavigationHelpersContext,
    TabRouter,
} from "@react-navigation/native";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { ScrollView } from "react-native-gesture-handler";
  
interface Props extends NativeStackScreenProps<StackParamsList, "exercise-timer"> {}

export function ExerciseTimer() {
    return (
    <Box>
        
    </Box>
    );
}