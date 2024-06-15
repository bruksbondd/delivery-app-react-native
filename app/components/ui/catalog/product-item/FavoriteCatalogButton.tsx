import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'

import { UserService } from '@/services/user.service'

import { useProfile } from '@/components/screens/profile/useProfile'
import ProductButton from '@/components/screens/product/ProductButton'
import { Pressable } from 'react-native'

interface IFavoriteButton {
	productId: string
}

const FavoriteCatalogButton: FC<IFavoriteButton> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),

		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	if (!profile) return null

	const isExists = profile.favorites.some(
		favorite => favorite.id === productId
	)

	return (
		<Pressable className='absolute top-2 right-2 w-5 h-5 z-50' onPress={() => mutate()}>
			{isExists ? (
				<MaterialCommunityIcons
					name='heart'
					size={22}
					color='#DC3F41'
				/>
			) : (
				<MaterialCommunityIcons
					name='heart-outline'
					size={22}
					color='#555'
				/>
			)}
		</Pressable>
	)
}

export default FavoriteCatalogButton
