import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./component/Product";
import Home from "./component/home";
import Products from "./component/Products";
const App = () => {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/product/:id" component={Product} />
					<Route exact path="/products" component={Products} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
