import { Link } from 'expo-router'
import { Button, Text, View } from 'react-native'

const Signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Signup</Text>
      <Link href="/sign-in" asChild>
        <Button title="Sign in" />
      </Link>
    </View>
  )
}

export default Signup