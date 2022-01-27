import React from "react";
import { Box, HStack, Pressable, Text, Image } from "native-base";

interface IProps {
  title: string;
  imageUrl?: string;
  onClick?: () => void;
}

export const HomeExerciseCard = ({ title, imageUrl, onClick }: IProps) => {
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
              <Box backgroundColor="secondary.800" p="1" rounded="lg" >
              <Image
              source={{
                uri: imageUrl
              }}
              alt="Alternate Text"
              size="md"
              />
              </Box>
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
