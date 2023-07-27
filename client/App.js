import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-red-500 bg-[#1da1f2]">Teste!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

