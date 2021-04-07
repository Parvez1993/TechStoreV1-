import React from "react";

export default function CartColumn() {
	return (
		<div className="container-fluid d-none d-lg-block my-5 text-center">
			<div className="row text-uppercase">
				<div className="col-lg-2">Products</div>
				<div className="col-lg-2">Name of Products</div>
				<div className="col-lg-2">Price</div>
				<div className="col-lg-2">Quantity</div>
				<div className="col-lg-2">Remove</div>
				<div className="col-lg-2">Total</div>
			</div>
		</div>
	);
}
