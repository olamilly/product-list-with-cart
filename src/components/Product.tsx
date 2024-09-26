import { useState } from "react";

function Product(props: any) {
	const [plusIsHovered, setPlusIsHovered] = useState(false);
	const [minusIsHovered, setMinusIsHovered] = useState(false);
	const plushandleMouseOver = () => {
		setPlusIsHovered(true);
	};

	const plushandleMouseOut = () => {
		setPlusIsHovered(false);
	};
	const minushandleMouseOver = () => {
		setMinusIsHovered(true);
	};

	const minushandleMouseOut = () => {
		setMinusIsHovered(false);
	};
	return (
		<div className="product" id={props.dessert.name}>
			<div className="mainContainer">
				<div className="imageContainer">
					{window.innerWidth <= 450 && (
						<img
							className={props.dessert.number === 0 ? "" : " selected"}
							src={props.dessert.image.mobile}
							alt={props.dessert.name}
						/>
					)}
					{window.innerWidth > 450 && window.innerWidth < 778 && (
						<img
							className={props.dessert.number === 0 ? "" : " selected"}
							src={props.dessert.image.tablet}
							alt={props.dessert.name}
						/>
					)}
					{window.innerWidth >= 778 && (
						<img
							className={props.dessert.number === 0 ? "" : " selected"}
							src={props.dessert.image.desktop}
							alt={props.dessert.name}
						/>
					)}
				</div>
				<div className="cartControls">
					{props.dessert.number === 0 && (
						<div
							id="atc"
							onClick={() => {
								props.dessert.number += 1;
								props.selectDessert(props.dessert);
							}}
						>
							<img src="/images/icon-add-to-cart.svg" alt="cart" />
							<span>Add to cart</span>
						</div>
					)}
					{props.dessert.number > 0 && (
						<div className="quantityControls">
							<span
								id="decrement"
								onClick={() => {
									props.dessert.number -= 1;
									props.updateNumber(props.dessert);
								}}
							>
								<i
									className={`bx ${
										minusIsHovered ? "bxs-minus-circle" : "bx-minus-circle"
									}`}
									onMouseOver={minushandleMouseOver}
									onMouseOut={minushandleMouseOut}
								></i>
							</span>

							<span>{props.dessert.number}</span>
							<span
								id="decrement"
								onClick={() => {
									props.dessert.number += 1;
									props.updateNumber(props.dessert);
								}}
							>
								<i
									className={`bx ${
										plusIsHovered ? "bxs-plus-circle" : "bx-plus-circle"
									}`}
									onMouseOver={plushandleMouseOver}
									onMouseOut={plushandleMouseOut}
								></i>
							</span>
						</div>
					)}
				</div>
			</div>
			<div className="productDescription">
				<p className="productCategory">{props.dessert.category}</p>
				<p className="productName">{props.dessert.name}</p>
				<p className="productPrice">${props.dessert.price}</p>
			</div>
		</div>
	);
}

export default Product;
