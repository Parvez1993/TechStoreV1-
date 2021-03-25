import React from "react";
import { ProductConsumer } from "../context";
import Hero from "../components/Hero";
import Services from "../components/Homepage/Services";
import Featured from "../components/Homepage/Featured";
import { Link } from "react-router-dom";
export default function HomePage() {
	return (
		<>
			<Hero title="awesome gadgets" max="true">
				<Link to="/products" className="main-link" style={{ margin: "2rem" }}>
					our products
				</Link>
			</Hero>
			<Services />
			<Featured />
		</>
	);
}
