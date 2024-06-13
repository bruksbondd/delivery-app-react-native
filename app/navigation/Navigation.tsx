import { TypeRootStackParamlist } from './navigation.types'
import { routes } from './routes'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Stack = createNativeStackNavigator<TypeRootStackParamlist>()

export class Navigation extends Component {
	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: '#fff'
                    }
                }}>
					{routes.map(route => (
						<Stack.Screen key={route.name} {...route} />
					))}
				</Stack.Navigator>
			</NavigationContainer>
		)
	}
}

export default Navigation
