// import {  } from ""

function ConfirmOrder(props: any) {
	function confirmOrder() {
		console.log(props.orderItems);
	}
	return (
		<div>
			<button
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				onClick={confirmOrder}
			>
				Confirm Order
			</button>

			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<img
								src="/images/icon-order-confirmed.svg"
								alt="Order Confirmed"
							/>
							<h3 className="modal-title " id="exampleModalLabel">
								Order Confirmed
							</h3>
							<span className="productCategory">
								We hope you enjoy your food!
							</span>
						</div>
						<div className="modal-body">
							{props.orderItems.map((i: any) => (
								<div className="cartItem" key={i.id}>
									<div className="itemDetails">
										<p className="itemName">{i.name}</p>
										<div className="itemCalculation">
											<span className="numberOfItems">{i.number}x</span>
											<span className="itemUnitPrice">@${i.price}</span>
											<span className="itemTotalPricemodal ">
												${i.price * i.number}
											</span>
										</div>
									</div>
								</div>
							))}

							<div className="orderTotalmodal">
								<p>Order Total</p>
								<p className="total">${props.orderTotal}</p>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								onClick={() => {
									props.newOrder();
									window.scrollTo(0, 0);
								}}
								data-bs-dismiss="modal"
							>
								Start New Order
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConfirmOrder;
