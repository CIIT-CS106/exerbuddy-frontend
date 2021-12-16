import { Box, Center, Text, Image, Input, Stack, FormControl, Button, Link, HStack,VStack} from 'native-base';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import React from 'react';
import { NativeStackScreenProps  } from "@react-navigation/native-stack";
import { StackParamsList} from "../../App";



interface Props extends NativeStackScreenProps<StackParamsList>{}


export function SignUpPage() {
  return (
    <Box
      bg="#242426"
      height="100%"
      width="100%"
    >
    </Box>
  );
}