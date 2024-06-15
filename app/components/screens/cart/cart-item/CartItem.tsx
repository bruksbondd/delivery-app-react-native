import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import { useActions } from '@/hooks/useActions'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/convertPrice'
import { getMediaSource } from '@/utils/getMediaSource'

import CartIActions from './CartActions'

interface ICartItemProps {
	item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation()
	const { changeQuantity, removeFromCart } = useActions()

	return (
		<View className='flex-row mt-5 w-full justify-between'>
			<View className='flex-row max-w-[80%] overflow-hidden  '>
				<Pressable
					onPress={() =>
						navigate('Product', { slug: item.product.slug })
					}
					className='bg-gray-100 rounded-xl overflow-hidden py-3 px-3 items-center w-28'
				>
					<Image
						source={getMediaSource(item.product.image)}
						width={80}
						height={80}
					/>
				</Pressable>

				<View className='ml-5 mt-2 '>
					<Text
						className='whitespace-nowrap text-ellipsis font-semibold text-xl '
					>
						{item.product.name}
					</Text>
					<Text className='mt-1'>{convertPrice(item.price)}</Text>
					<CartIActions item={item} />
				</View>
			</View>

			<Pressable
				onPress={() => {
					changeQuantity({ id: item.id, type: 'minus' }),
						removeFromCart({ id: item.id })
				}}
				className='flex justify-center mr-5'
			>
				<AntDesign name='delete' size={22} />
			</Pressable>
		</View>
	)
}

export default CartItem
