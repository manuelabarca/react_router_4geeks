import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
	let { id } = useParams();
	let [product, setProduct] = useState({});

	const FAKE_API_STORE = `https://fakestoreapi.herokuapp.com/products/${id}`;

	useEffect(() => {
		fetch(FAKE_API_STORE, {})
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(`info de producto ${data}`);
				setProduct(data);
			})
			.catch(err => {
				console.error(`Error: ${err}`);
			});
	}, []);

	return (
		<>
			<h1>PRODUCTO: {JSON.stringify(product)} </h1>
			<img src={product.image} />
		</>
	);
};

export default Product;
