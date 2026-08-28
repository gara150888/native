import "@/style/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Button, Text, View } from "react-native";
import { SafeAreaView as SafeAreaViewNative } from "react-native-safe-area-context";

const SafeAreaView = styled(SafeAreaViewNative)

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-bold text-primary">
          Welcome to Nativewind!
        </Text>

        <Link href="/onboarding" asChild>
          <Button title="Go to onboarding" />
        </Link>

        <Link href="/(auth)/sign-in" asChild>
          <Button title="Go to auth" />
        </Link>
      </View>
    </SafeAreaView>
  );
}
