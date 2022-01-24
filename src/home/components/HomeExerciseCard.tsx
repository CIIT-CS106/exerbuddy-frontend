import React from "react";
import { Box, HStack, Pressable, Text } from "native-base";

interface IProps {
  title: string;
  imageUrl?: string;
  onClick?: () => void;
}

export const HomeExerciseCard = ({ title, onClick }: IProps) => {
  return (
    <Pressable mb="4">
      {({ isPressed }) => {
        // Call the onClick handler when the button is pressed
        if (onClick) {
          onClick();
        }

        return (
          <Box
            bg={isPressed ? "primary.600" : "primary.500"}
            p="5"
            rounded="2xl"
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
          >
            <HStack space="3">
              <Box backgroundColor="secondary.800" p="10" rounded="xl" />
              <Text color="secondary.50" bold fontSize="lg">
                {title}
              </Text>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
};
