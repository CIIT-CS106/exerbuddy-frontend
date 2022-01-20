import 'react-native-gesture-handler';
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import { registerRootComponent } from "expo";
import { Provider as ReduxProvider } from "react-redux";

import { LoginPage } from "../login/LoginPage";
import { SignUpPage } from "../signup/SignUpPage";
import { SignUpGender } from "../signup-gender/SignUpGender";
import { HomePage } from "../home/HomePage";
import { Workout} from "../workout/Workout";
import { WorkoutDifficulty} from "../workout/WorkoutDifficulty";
import { ExerciseMenu} from "../workout/ExerciseMenu";
import { ExerciseTimer} from "../workout/ExerciseTimer";
import { store } from "./store";
import theme from "../theme";

export type StackParamsList = {
  login: undefined;
  "sign-up": undefined;
  "signup-gender": undefined;
  "home" :undefined;
  "workout" :undefined;
  "workoutdifficulty" :undefined;
  "exercise-menu" :undefined;
  "exercise-timer" :undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();


function App() {
  return (
    <ReduxProvider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="workout">
            <Stack.Screen
              options={{ headerShown: false }}
              name="login"
              component={LoginPage}
            />
            <Stack.Screen 
              name="sign-up" 
              component={SignUpPage} 
              options={{ title: 'Sign Up',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#40a69d',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              }} 
            />

          <Stack.Screen 
            name="signup-gender" 
            component={SignUpGender} 
            options={{ title: 'Sign Up',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#40a69d',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} 
          />
          <Stack.Screen
              options={{title: 'Home',
                headerStyle: {
                  backgroundColor: '#252527',
                },
                headerTintColor: '#fff',
              }}
              name="home"
              component={HomePage}
          />
          <Stack.Screen
            name="workout"
            component={Workout}
            options={{ title: 'WORKOUT',
              headerStyle:{
                backgroundColor: '#252527',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
          name="workoutdifficulty"
            component={WorkoutDifficulty}
            options={{ title: 'WORKOUT',
              headerStyle:{
                backgroundColor: '#252527',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
              options={{title: 'WORKOUT',
                headerStyle: {
                  backgroundColor: '#252527',
                },
                headerTintColor: '#fff',
              }}
              name="exercise-menu"
              component={ExerciseMenu}
          />
          <Stack.Screen
              options={{title: 'WORKOUT',
                headerStyle: {
                  backgroundColor: '#252527',
                },
                headerTintColor: '#fff',
              }}
              name="exercise-timer"
              component={ExerciseTimer}
          />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ReduxProvider>
  );
}
export default registerRootComponent(App);
