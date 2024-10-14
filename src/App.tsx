import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import Cart from "./components/Cart";
function App() {
	const [desserts, setDesserts] = useState<any[]>([]);
	const [cart, setCart] = useState<any[]>([]);
	useEffect(() => {
		fetch("/data.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				for (var i = 0; i < data.length; i++) {
					data[i]["id"] = i;
					data[i]["number"] = 0;
					data[i]["inventory"] = Math.floor(Math.random() * 11);
				}
				setDesserts(data);
			})
			.catch((error) =>
				console.error(
					"There has been a problem with your fetch operation:",
					error
				)
			);
	}, []);

	const addToCart = (newItem: any) => {
		setCart([...cart, newItem]);
	};
	const removeItemFromCart = (item: any) => {
		var temp: any[] = [];
		cart.forEach((i) => {
			if (i.id !== item.id) {
				temp.push(i);
			}
		});
		setCart([...temp]);
		desserts.forEach((i) => {
			if (i.id === item.id) {
				i.number = 0;
			}
		});
		setDesserts([...desserts]);
	};
	const updateCart = (cartItem: any) => {
		if (cartItem.number === 0) {
			removeItemFromCart(cartItem);
		} else {
			cart.forEach((i) => {
				if (i.id === cartItem.id) {
					i = cartItem;
				}
			});
			setCart([...cart]);
		}

		desserts.forEach((i) => {
			if (i.id === cartItem.id) {
				i = cartItem;
			}
		});
		setDesserts([...desserts]);
	};
	const clearCart = () => {
		setCart([]);
		desserts.forEach((i) => {
			i.number = 0;
		});
		setDesserts([...desserts]);
	};
	return (
		<div className="App">
			<div className="products">
				<header>
					<h1>Desserts</h1>
				</header>
				<main>
					{desserts.map((d) => (
						<Product
							key={d.id}
							dessert={d}
							updateNumber={updateCart}
							selectDessert={addToCart}
						/>
					))}
				</main>
			</div>
			<Cart
				items={cart}
				removeItem={removeItemFromCart}
				clearCart={clearCart}
			/>
		</div>
	);
}

export default App;
