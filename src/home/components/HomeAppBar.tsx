import React from "react";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { HStack, StatusBar, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeAppBar = (props: BottomTabHeaderProps) => {
  const { options } = props;
  const title = options.title;

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        animated={true}
        barStyle={"light-content"}
        backgroundColor={"#252527"}
      />
      <HStack p="4" bg="secondary.800" alignItems={"center"}>
        <Text color={"white"} fontWeight="bold" fontSize={"xl"}>
          {title}
        </Text>
      </HStack>
    </SafeAreaView>
  );
};

export default HomeAppBar;
