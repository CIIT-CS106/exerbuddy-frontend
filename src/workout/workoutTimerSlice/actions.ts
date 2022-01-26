import { RootState } from "@app/store";
import { createAction, createAsyncThunk, current } from "@reduxjs/toolkit";

export const startTimer = createAsyncThunk<number>(
  "workoutTimer/startTimer",
  async (_, { dispatch, getState }) => {
    const timerId = window.setInterval(() => {
      const rootState = getState() as RootState;
      const { currentTime, isRunning } = rootState.workoutTimer;

      if (currentTime > 0) {
        dispatch(decrementTimer());
      } else {
        dispatch(stopTimer());
      }
    }, 1);
    return timerId;
  }
);

export const decrementTimer = createAction("workoutTimer/decrementTimer");
export const stopTimer = createAsyncThunk(
  "workoutTimer/stopTimer",
  (_, { getState }) => {
    const rootState = getState() as RootState;
    const timerId = rootState.workoutTimer.timerId;
    if (timerId) {
      clearInterval(timerId);
    }
  }
);
export const resetTimer = createAction<number>("workoutTimer/resetTimer");
export const pauseTimer = createAction("workoutTimer/pauseTimer");
