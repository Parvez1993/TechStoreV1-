import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function SideCart() {
	return (
		<ProductConsumer>
			{(value) => {
				const { cartOpen, closeCart, cart, cartTotal } = value;
				return (
					<CartWrapper shows={cartOpen} onClick={closeCart}>
						<ul>
							{cart.map((item) => {
								return (
									<li key={item.id} className="mb-4 cart-item">
										<img src={item.image} alt="cart-img" width="35"></img>
										<div className="mt-3">
											<h6 className="text-capitalize">{item.title}</h6>
											<h6 className="text-capitalize text-title">
												amount: {item.count}
											</h6>
										</div>
									</li>
								);
							})}
						</ul>
						<h3 className="text-main text-capitalize">Total: ${cartTotal}</h3>
						<div className="text-center my-5">
							<Link to="/cart" className="main-link">
								Cart Page
							</Link>
						</div>
					</CartWrapper>
				);
			}}
		</ProductConsumer>
	);
}

const CartWrapper = styled.div`
	position: fixed;
	top: 61px;
	right: 0;
	width: 100%;
	height: 100%;
	background: var(--mainGrey);
	z-index: 1;
	transform: ${(props) => (props.shows ? "translateX(0)" : "translateX(100%)")};
	border-left: 4px solid var(--primaryColor);
	transition: var(--mainTransition);
	@media (min-width: 576px) {
		width: 20rem;
	}
	overflow: scroll;
	padding: 2rem;
	ul {
		padding: 0 !important;
	}
	.cart-item {
		list-style-type: none;
	}
`;
