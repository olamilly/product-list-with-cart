import { useEffect, useState } from "react";
import ConfirmOrder from "./ConfirmOrder";

function Cart(props: any) {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		var t = 0;
		props.items.forEach((i: any) => {
			t = t + i.number * i.price;
		});
		setTotal(t);
	}, [props.items]);
	return (
		<div className="cart">
			<div className="cartCard">
				<div className="cartHeader">
					<h3>Your Cart ({props.items.length})</h3>{" "}
					{props.items.length > 0 && (
						<span onClick={props.clearCart}>Clear Cart</span>
					)}
				</div>
				{props.items.length === 0 && (
					<div className="emptyCart">
						<img src="/images/illustration-empty-cart.svg" alt="Empty Cart" />
						<p>Your added Items will appear here.</p>
					</div>
				)}
				{props.items.length > 0 && (
					<div className="cartItems">
						{props.items.map((i: any) => (
							<div className="cartItem" key={i.id}>
								<div className="itemDetails">
									<p className="itemName">{i.name}</p>
									<div className="itemCalculation">
										<span className="numberOfItems">{i.number}x</span>
										<span className="itemUnitPrice">@${i.price}</span>
										<span className="itemTotalPrice">
											${i.price * i.number}
										</span>
									</div>
								</div>
								<i
									className="bx bx-x-circle"
									id="removeItem"
									onClick={() => {
										props.removeItem(i);
									}}
								></i>
							</div>
						))}

						<div className="orderTotal">
							<p>Order Total</p>
							<p className="total">${total}</p>
						</div>
						<div className="carbonNeutral">
							<img src="/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
							<span>
								This is a <strong>carbon neutral</strong> delivery
							</span>
						</div>
						<ConfirmOrder
							orderItems={props.items}
							orderTotal={total}
							newOrder={props.clearCart}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
