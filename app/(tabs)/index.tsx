import { styled } from "nativewind";
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";

const SafeAreaView = styled(SafeAreaViewNative)

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className='flex-1 items-center justify-center bg-background'>
        <Text className='text-xl font-bold text-primary'>Home</Text>
      </View>
    </SafeAreaView>
  );
}
