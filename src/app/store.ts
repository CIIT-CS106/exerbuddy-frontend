import { configureStore } from "@reduxjs/toolkit";
import { workoutTimerReducer } from "../workout/workoutTimerSlice";

export const store = configureStore({
  reducer: {
    workoutTimer: workoutTimerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
