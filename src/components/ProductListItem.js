import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

function ProductListItem({ product }) {
	const dispatch = useDispatch();

	return (
		<div class='grid grid-rows-3 grid-flow-col gap-5 place-content-center rounded-md'>
			<div className='menu-card'>
				<img
					src={product.image}
					className='w-full max-h-60'
					alt='A plain bagel'
				/>
				<div className='px-6 py-4'>
					<h2 className='font-bold text-xl mb-2'>{product.name}</h2>
					<p className='font-semibold text-gray-600 mb-2'>
						The original NY classic - boiled and baked
					</p>
					<span className='font-medium text-lg'>{product.price}</span>
					<button
						onClick={() => {
							let item = null;
							item = { ...product, quantity: 1 };
							dispatch(addToCart(item));
						}}
						className=''
					>
						<ShoppingBagIcon />
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductListItem;
