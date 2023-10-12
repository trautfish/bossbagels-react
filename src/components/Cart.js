import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQ, incrementQ, removeFromCart } from './features/cartSlice';

function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<div className='card'>
					<div className='card-body'>
						<table className='table'>
							<thead>
								<tr>
									<th>#</th>
									<th>Image</th>
									<th>Name</th>
									<th>Quantity</th>
									<th>Price</th>
									<th>Subtotal</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{cartItems.map((item) => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>
											<img
												src={item.image}
												className='rounded-lg w-60 h-60'
												alt={item.name}
											/>
										</td>
										<td>{item.name}</td>
                              <td>
                                 <></>
                              </td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
