import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const SubscriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-xl font-bold text-blue-500'>{id}</Text>
      <Link href="/index" asChild>
        <Button title="Go Back" />
      </Link>
    </View>
  )
}

export default SubscriptionsDetails