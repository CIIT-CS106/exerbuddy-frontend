import React from "react";
import { Box, Center, Image, Pressable, Text } from "native-base";
interface IProps {
  title: string;
  imageUrl?: string;
  onPressed?: () => void;
}

const WorkoutCategoryCard = (props: IProps) => {
  const { title, imageUrl, onPressed } = props;

  return (
    <Pressable onPress={onPressed}>
      {({ isPressed }) => (
        <Box
          bg={isPressed ? "primary.600" : "primary.500"}
          shadow="3"
          rounded="md"
          h="40"
          w="40"
          style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
        >
          <Center h="full">
            <Text fontWeight="bold" fontSize="lg" color="white">
              {title}
            </Text>
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="lg"
            />
          </Center>
        </Box>
      )}
    </Pressable>
  );
};

export default WorkoutCategoryCard;
