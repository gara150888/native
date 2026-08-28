import { styled } from "nativewind";
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";

const SafeAreaView = styled(SafeAreaViewNative)

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className='flex-1 items-center justify-center bg-background'>
        <Text className='text-xl font-bold text-primary'>Subscriptions</Text>
      </View>
    </SafeAreaView>
  )
}

export default Subscriptions
