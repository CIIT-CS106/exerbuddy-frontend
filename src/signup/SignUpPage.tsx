import { Box, StatusBar, Image } from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamsList } from "@app/App";

interface Props extends NativeStackScreenProps<StackParamsList> {}

export function Logo(){
  return(
    <Image
            source={require("../image/logoWName.png")}
            w="100%"
            h="100%"
            resizeMode={"contain"}
            alt="Alternate Text"
    />
  )  
}

export function SignUpPage() {
  return (
    <Box bg="#242426" height="100%" width="100%">
      <StatusBar animated={true} translucent={true} barStyle={"dark-content"} backgroundColor={"#fff"}/>
    </Box>
  )
}
