import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Box, NativeBaseProvider } from "native-base";
import { registerRootComponent } from "expo";
import { Provider as ReduxProvider } from "react-redux";

import { LoginPage } from "../login/LoginPage";
import { SignUpPage } from "../signup/SignUpPage";
import { SignUpGender } from "../signup-gender/SignUpGender";
import HomePage from "../home/HomePage";
import { WorkoutDifficultyPage } from "../workout/WorkoutDifficultyPage";

import { store } from "./store";
import theme from "../theme";
import {
  BottomTabHeaderProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeAppBar from "../home/components/HomeAppBar";
import WorkoutDetailsPage from "../workout-details/WorkoutDetailsPage";
import WorkoutListPage from "../workout-list/WorkoutListPage";
import WorkoutPage from "../workout/WorkoutPage";

export type StackParamsList = {
  login: undefined;
  "sign-up": undefined;
  "signup-gender": undefined;
  home: undefined;
};
export type HomeTabParamsList = {
  landing: undefined;
  workout: undefined;
};
export type WorkoutStackParamsList = {
  "workout-list": undefined;
  "workout-start": {
    durationMs: number;
  };
  "workout-difficulty": undefined;
  "workout-details": undefined;
};

export type WorkoutStackNavigationProps =
  NativeStackNavigationProp<WorkoutStackParamsList>;

const Tabs = createBottomTabNavigator<HomeTabParamsList>();

const HomeTabs = () => {
  const { colors } = theme;
  return (
    <Tabs.Navigator
      initialRouteName="landing"
      screenOptions={{
        header: (props: BottomTabHeaderProps) => <HomeAppBar {...props} />,
        tabBarBackground: () => <Box w="full" h="full" bg="secondary.800" />,
        tabBarInactiveTintColor: colors.gray["500"],
        tabBarActiveTintColor: colors.primary["500"],
      }}
    >
      <Tabs.Screen
        name="landing"
        component={HomePage}
        options={{
          title: "Home",
          tabBarIcon: () => <Box bg="red.100" h="full" />,
        }}
      />
      <Tabs.Screen
        name="workout"
        component={WorkoutStack}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const Stack = createNativeStackNavigator<WorkoutStackParamsList>();

const WorkoutStack = () => {
  const { colors } = theme;
  return (
    <Stack.Navigator initialRouteName={"workout-list"}>
      <Stack.Screen
        name="workout-list"
        component={WorkoutListPage}
        options={{
          title: "WORKOUT",
          headerStyle: {
            backgroundColor: colors.secondary["800"],
          },
          headerTintColor: colors.secondary["50"],
        }}
      />
      <Stack.Screen
        name="workout-difficulty"
        component={WorkoutDifficultyPage}
        options={{
          title: "WORKOUT",
          headerStyle: {
            backgroundColor: colors.secondary["800"],
          },
          headerTintColor: colors.secondary["50"],
        }}
      />
      <Stack.Screen
        name="workout-details"
        component={WorkoutDetailsPage}
        options={{
          title: "WORKOUT",
          headerStyle: {
            backgroundColor: colors.secondary["800"],
          },
          headerTintColor: colors.secondary["50"],
        }}
      />
      <Stack.Screen
        name="workout-start"
        component={WorkoutPage}
        options={{
          title: "WORKOUT",
          headerStyle: {
            backgroundColor: colors.secondary["800"],
          },
          headerTintColor: colors.secondary["50"],
        }}
      />
    </Stack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<StackParamsList>();

function App() {
  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="login">
            <RootStack.Screen
              options={{ headerShown: false }}
              name="login"
              component={LoginPage}
            />
            <RootStack.Screen
              name="sign-up"
              component={SignUpPage}
              options={{
                title: "Sign Up",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#40a69d",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />

            <RootStack.Screen
              name="signup-gender"
              component={SignUpGender}
              options={{
                title: "Sign Up",
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: "#40a69d",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            />
            <RootStack.Screen
              options={{
                headerShown: false,
              }}
              name="home"
              component={HomeTabs}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ReduxProvider>
  );
}
export default registerRootComponent(App);
