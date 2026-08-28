import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Signin = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Signin</Text>
      <Link href="/sign-up" asChild>
        <Button title="Sign up" />
      </Link>
    </View>
  )
}

export default Signin