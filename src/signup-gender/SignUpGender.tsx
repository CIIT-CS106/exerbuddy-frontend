import { 
    Box,
    Center,
    Text,
    Stack,
    FormControl,
    Button,
    Link,
    HStack,
    VStack,
    StatusBar,
  } from "native-base";
  import { color } from "native-base/lib/typescript/theme/styled-system";
  import React from "react";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { StackParamsList } from "@app/App";
  import { BaseRouter, NavigationHelpersContext, TabRouter } from "@react-navigation/native";
  
  interface Props extends NativeStackScreenProps<StackParamsList, "signup-gender"> {}

  export function SignUpGenderForm(){
  
    return(
      <FormControl paddingX="8">
             <VStack>
                <HStack alignItems="flex-start" mt="120">
                </HStack>
                <VStack space={1} alignItems="center" mb={50}>
                <Text fontSize="2xl" color="#fff">
                    STATE YOUR GENDER:
                    </Text>
                <Text fontSize="md" color="#fff">
                    (Can be changed in the settings)
                    </Text>
                </VStack>
                <Stack>
                  <Button
                    borderRadius="20"
                    alignSelf="center"
                    mb="5"
                    width="60%"
                  >
                    MALE
                  </Button>
                </Stack>

                <Stack>
                  <Button
                    borderRadius="20"
                    alignSelf="center"
                    mb="5"
                    width="60%"
                  >
                    FEMALE
                  </Button>
                </Stack>
  
              </VStack>
            </FormControl>
    )
  }

  export function SignUpGender() {
    return (
        <Box bg="secondary.800" height="100%" width="100%" safeArea>
        <StatusBar animated={true} translucent={true} barStyle={"light-content"} backgroundColor={"#2e817a"}/>
        <Box alignItems="center">
          <Box width="100%">
          <SignUpGenderForm  />
          </Box>
        </Box>
      </Box>
    )
  }