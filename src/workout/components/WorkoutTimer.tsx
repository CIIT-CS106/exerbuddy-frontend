import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Box, Text } from "native-base";
import { selectWorkoutTimer } from "../workoutTimerSlice";

import dateFns, {
  intervalToDuration,
  getMilliseconds,
  formatDuration,
} from "date-fns";
import { pad } from "../../utils/numberFormatter";

export const WorkoutTimer = () => {
  const { currentTime, isRunning } = useAppSelector(selectWorkoutTimer);
  /**
   * Format the current time to be represented as a string
   */
  const duration = intervalToDuration({
    start: 0,
    end: currentTime,
  });
  const formattedDuration = `${pad(duration.seconds!, 2)}:${pad(
    currentTime % 1000,
    2
  )}`;

  return (
    <Box alignItems="center" mb="5">
      <Text bold fontSize="5xl">
        {formattedDuration}
      </Text>
    </Box>
  );
};
