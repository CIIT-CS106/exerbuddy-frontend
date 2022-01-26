import { RootState } from "@app/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectWorkoutTimer = (state: RootState) => state.workoutTimer;
export const workoutTimerSelector = createSelector(
  selectWorkoutTimer,
  (state) => state
);
