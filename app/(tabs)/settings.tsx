import { Link } from "expo-router";
import { styled } from "nativewind";
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";

const SafeAreaView = styled(SafeAreaViewNative)


const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-xl font-bold text-primary">Settings</Text>
        <Link href="/sign-in" asChild>
          <Button title="Sign in" />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Settings
