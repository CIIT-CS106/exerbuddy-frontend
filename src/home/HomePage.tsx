import React from "react";
import { StackParamsList } from "@app/App";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeLandingPage from "./HomeLandingPage";
import { WorkoutPage } from "../workout/WorkoutPage";

interface Props extends NativeStackScreenProps<StackParamsList, "home"> {}

export type HomeTabParamsList = {
  landing: undefined;
  workout: undefined;
};

const HomeTabScreen = createBottomTabNavigator<HomeTabParamsList>();

const HomePage = ({}: Props) => {
  return (
    <HomeTabScreen.Navigator
      initialRouteName="landing"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeTabScreen.Screen
        name="landing"
        component={HomeLandingPage}
        options={{
          title: "Home",
        }}
      />
      <HomeTabScreen.Screen
        name="workout"
        component={WorkoutPage}
        options={{
          title: "Workouts",
        }}
      />
    </HomeTabScreen.Navigator>
  );
};

export default HomePage;
