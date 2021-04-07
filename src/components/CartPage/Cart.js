import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
//import CartItem from "./CartItem";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
export default function Cart() {
	return (
		<div className="py-5">
			<div className="container">
				<Title title="Cart Items" center />
				<h4>
					<CartColumn />
					<CartList />
					<CartTotal />
				</h4>
			</div>
		</div>
	);
}
