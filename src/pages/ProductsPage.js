import React from "react";
import Product from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import ProductBcg from "../images/productsBcg.jpeg";
export default function ProductsPage() {
	return (
		<>
			<Hero img={ProductBcg} />
			<Product />
		</>
	);
}
