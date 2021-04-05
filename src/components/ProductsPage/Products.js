import React from "react";
import { ProductConsumer } from "../../context";
import Title from "../Title";
import Product from "../Product";

export default function Products() {
	return (
		<ProductConsumer>
			{(value) => {
				const { filteredProducts } = value;
				return (
					<div className="py-5">
						<div className="container">
							<Title title="Our Products" center="true"></Title>
							<div className="row py-5">
								{filteredProducts.map((product) => {
									return <Product key={product.id} product={product} />;
								})}
							</div>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
