import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";
const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {
	state = {
		sidebarOpen: false,
		cartOpen: false,
		links: linkData,
		cart: [],
		socialLinks: socialData,
		cartItems: 0,
		cartSubtotal: 0,
		cartTax: 0,
		storeProducts: [],
		filteredProducts: [],
		featuredProducts: [],
		singleProducts: {},
		loading: true,
	};
	componentDidMount() {
		//from contentful items
		this.setProducts(items);
	}

	//set products

	setProducts = (products) => {
		let storeProducts = products.map((item) => {
			const { id } = item.sys;
			const image = item.fields.image.fields.file.url;
			const product = { id, ...item.fields, image };

			console.log(product);
			return product;
		});
		//featuredproduct
		let featuredProducts = storeProducts.filter(
			(item) => item.featured === true
		);

		this.setState({
			storeProducts,
			filteredProducts: storeProducts,
			featuredProducts,
			cart: this.getStorageCart(),
			singleProduct: this.getStorageProduct(),
			loading: false,
		});
	};

	getStorageCart = () => {
		return [];
	};
	getStorageProduct = () => {
		return [];
	};
	//getTotals
	getTotals = () => {};
	//addTotals
	addTotals = () => {};
	//sync
	syncStorage = () => {};

	addToCart = (id) => {
		console.log(`add to cart ${id}`);
	};

	setSingleProduct = (id) => {
		console.log(`set single product ${id}`);
	};
	// handle sidebar
	handleSidebar = () => {
		this.setState({ sidebarOpen: !this.state.sidebarOpen });
	};
	// hanldle sart
	handleCart = () => {
		this.setState({ cartOpen: !this.state.sidebarOpen });
	};
	//close cart
	closeCart = () => {
		this.setState({ cartOpen: false });
	};
	// open
	openCart = () => {
		this.setState({ cartOpen: true });
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleSidebar: this.handleSidebar,
					handleCart: this.handleCart,
					closeCart: this.closeCart,
					openCart: this.openCart,
					addToCart: this.addToCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
