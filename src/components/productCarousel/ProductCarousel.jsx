import React, { useState } from "react";
import "./styles.css";
import prevIcon from "../../assets/images/prev_icon.svg";
import nextIcon from "../../assets/images/next_icon.svg";
// import CateCard from "../cateCard/CateCard";
import Data from "../../product_list.json";
import ProductCard from "../productCard/ProductCard";

function ProductCarousel({ visibleCards, moveCards }) {
    const totalCards = Data.length;
	const [currentIndex, setCurrentIndex] = useState(0);
	let translateX = `calc(-100% / ${totalCards} * ${currentIndex})`;
	const width = `calc(100% * ${totalCards} / ${visibleCards})`;

	const handleNext = () => {
		let res = totalCards - visibleCards - currentIndex;
		if (res > moveCards) {
			setCurrentIndex(currentIndex + moveCards);
		} else {
			setCurrentIndex(currentIndex + res);
		}
	};

	const handlePrev = () => {
		let res = currentIndex;
		if (res > moveCards) {
			setCurrentIndex(currentIndex - moveCards);
		} else {
			setCurrentIndex(currentIndex - res);
		}
	};

	return (
		<div className="card-slider">
			<button className="slider-btn prev-btn" onClick={handlePrev} disabled={currentIndex === 0}>
				<img src={prevIcon} alt="prev" />
			</button>
			<div className="cards-container">
				<div
					className="cards-wrapper"
					style={{
						transform: `translateX(${translateX})`,
						width: width,
						transition: "transform 0.5s ease-in-out",
					}}
				>
					{Data.map((product) => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
			<button
				className="slider-btn next-btn"
				onClick={handleNext}
				disabled={currentIndex + visibleCards >= totalCards}
			>
				<img src={nextIcon} alt="next" />
			</button>

            <p className="see-all">
                Xem tất cả
            </p>
		</div>
	);
}

export default ProductCarousel;
