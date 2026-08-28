import "@/style/global.css";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <Button title="Go to auth" />
      </Link>
    </View>
  );
}