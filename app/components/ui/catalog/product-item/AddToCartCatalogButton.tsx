import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import Button from '@/components/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IProduct } from '@/types/product.interface'

interface IAddToCartButton {
	product: IProduct
}

const AddToCartCatalogButton: FC<IAddToCartButton> = ({ product }) => {
	const { navigate } = useTypedNavigation()
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<>
			<Pressable
				onPress={() =>
					currentElement
						? navigate('Cart')
						: addToCart({
								product,
								quantity: 1,
								price: product.price
							})
				}
				className={cn(
					'self-center mb-3  w-full py-1 font-light rounded-lg',
					currentElement ? 'bg-gray-400' : 'bg-[#47AA52]'
				)}
			>
				<Text className='text-white text-center font-medium text-sm'>
					{currentElement ? 'Go to cart' : 'Add to cart'}
				</Text>
			</Pressable>
		</>
	)
}

export default AddToCartCatalogButton
