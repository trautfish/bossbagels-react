import React from 'react';
import { useSelector } from 'react-redux';
import ProductListItem from './ProductListItem';

function ProductList() {
	const { products } = useSelector((state) => state.product);

	return (
		<div className=''>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductList;
