import React from "react";
import { ProductConsumer } from "../../context";
export default function CartTotal() {
	return (
		<div className="container">
			<div className="row">
				<ProductConsumer>
					{(value) => {
						const { cartTotal, cartTax, cartSubTotal, clearCart } = value;
						return (
							<div className="col text-center text-title my-5">
								<button
									className="btn btn-outline-danger mb-4"
									onClick={clearCart}
								>
									<h3>Clear Cart</h3>
								</button>
								<h3>subTotal: {cartSubTotal}</h3>
								<h3>tax: {cartTax}</h3>
								<h3>Total: {cartTotal}</h3>
							</div>
						);
					}}
				</ProductConsumer>
			</div>
		</div>
	);
}
