import { createSlice } from '@reduxjs/toolkit';
import Product1 from '../images/plain_bagel.jpg';
import Product5 from '../images/bagel_flight.jpg';

const initialState = {
	products: [
		{
			id: 1,
			name: 'Plain Bagel',
			price: 2,
			image: { Product1 },
		},
		{
			id: 2,
			name: 'Everything Bagel',
			price: 2,
			image: { Product1 },
		},
		{
			id: 3,
			name: 'Sesame Bagel',
			price: 2,
			image: { Product1 },
		},
		{
			id: 4,
			name: 'The Lochs Monster Bagel',
			price: 12,
			image: { Product1 },
		},
		{
			id: 5,
			name: 'Bagel Flight',
			price: 10,
			image: { Product5 },
		},
		{
			id: 6,
			name: 'Schmears!',
			price: 2,
			image: { Product1 },
		},
	],
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {}
});

export default productSlice.reducer;
