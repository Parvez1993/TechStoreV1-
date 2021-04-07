import React from "react";
import CartSection from "../components/CartPage";
import Hero from "../components/Hero";
import CartImg from "../images/storeBcg.jpeg";
export default function CartPage() {
	return (
		<>
			<h1>
				<Hero img={CartImg} title="Cart" />
				<CartSection />
			</h1>
		</>
	);
}
