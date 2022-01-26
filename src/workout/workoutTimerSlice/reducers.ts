import { createReducer } from "@reduxjs/toolkit";
import {
  decrementTimer,
  pauseTimer,
  resetTimer,
  startTimer,
  stopTimer,
} from "./actions";

export interface WorkoutTimerState {
  isRunning: boolean;
  currentTime: number;
  timerId?: number | null;
}

const initialState: WorkoutTimerState = {
  isRunning: false,
  currentTime: 2000,
  timerId: null,
};

export const workoutTimerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(startTimer.fulfilled, (state, action) => {
      const { payload } = action;
      state.timerId = payload;
      state.isRunning = true;
    })
    .addCase(decrementTimer, (state) => {
      state.currentTime--;
    })
    .addCase(stopTimer.fulfilled, (state) => {
      state.isRunning = false;
      state.timerId = null;
    })
    .addCase(resetTimer, (state, action) => {
      state.currentTime = action.payload;
      state.isRunning = false;
    });
});
