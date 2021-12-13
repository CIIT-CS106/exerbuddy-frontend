import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Center, Text } from 'native-base';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}