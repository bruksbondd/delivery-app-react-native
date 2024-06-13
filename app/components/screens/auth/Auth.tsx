import { useTapedNavigation } from '@/hooks/useTypedNavigation'
import { TypeRootStackParamlist } from '@/navigation/navigation.types'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

const Auth = () => {
	const { navigate } = useTapedNavigation()
	return (
		<View>
			<Text>Auth</Text>
			<Pressable onPress={() => navigate('Home')}><Text>Go to home</Text></Pressable>
		</View>
	)
}

export default Auth
