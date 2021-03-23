import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
	let [list, setList] = useState([]);

	const FAKE_API_STORE = "https://fakestoreapi.herokuapp.com/products";

	useEffect(() => {
		fetch(FAKE_API_STORE, {})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(`Lista de productos ${data}`);
				console.table(data);
				setList(data);
			})
			.catch(err => {
				console.error(`Error: ${err}`);
			});
	}, []);
	return (
		<div className="text-center mt-5">
			<h1>Lista de productos</h1>
			<ul>
				{list.map(product => (
					<li key={product.id}>
						<Link to={`/product/${product.id}`}>
							{product.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
