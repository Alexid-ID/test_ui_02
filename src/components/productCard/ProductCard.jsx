import React from "react";
import ProductImage from "../../assets/images/product.png";
import GoodPriceImage from "../../assets/images/good_price.png";
import "./styles.css";

const tagColors = ["blue", "green", "red", "yellow"]
const getRandomColor = () => tagColors[Math.floor(Math.random() * tagColors.length)];

const ProductCard = ({
	productName,
	price,
	basePrice,
	discountPrice,
	isDiscounted,
	discountPercent,
	tags = [],
	productImage
}) => {
	// Hiển thị giá cũ (basePrice) nếu có và tính toán giá tiết kiệm nếu có giảm giá
	const discount = isDiscounted ? <div className="discount">-{discountPercent}%</div> : null;

    const isGoodPrice = discountPercent >= 20;

	const basePriceElement = discountPrice ? (
		<p className="base-price-container">
			<span className="base-price">{basePrice.toLocaleString()} đ</span>
			{discountPrice && <span className="discount-price">Tiết kiệm {discountPrice.toLocaleString()} đ</span>}
		</p>
	) : null;

	// Hiển thị tags nếu có
	const tagsList = tags.map((tag, index) => (
		<div key={index} className={`tag ${getRandomColor()}`}>
			{tag}
		</div>
	));

	return (
		<div className="product-card">
			<div className="product-card_img">
				<img src={ProductImage} alt={productName} />
				{isGoodPrice && (
					<span className="good-price">
						<img src={GoodPriceImage} alt="good-price" />
					</span>
				)}
				{discount && discount}
				<div className="tag-list">{tagsList}</div>
			</div>
			<div className="product-card_info">
				<p
					className="price"
					style={{
						color: basePriceElement ? "#DD6B20" : "",
					}}
				>
					{price.toLocaleString()} đ{basePriceElement}
				</p>

				<h3 className="product-name">{productName}</h3>
			</div>
		</div>
	);
};

export default ProductCard;
