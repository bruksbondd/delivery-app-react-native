import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Home = () => {
    const {navigate} = useTypedNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => navigate('Auth')}><Text>Go to auth</Text></Pressable>
    </View>
  )
}

export default Home