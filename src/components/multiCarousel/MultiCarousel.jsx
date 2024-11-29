import React, { useState } from "react";
import "./styles.css";
import prevIcon from "../../assets/images/prev_icon.svg";
import nextIcon from "../../assets/images/next_icon.svg";
// import CateCard from "../cateCard/CateCard";

function MultiCarousel({ totalCards, visibleCards, moveCards, children }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	let translateX = `calc(-100% / ${totalCards} * ${currentIndex})`;
	const width = `calc(100% * ${totalCards} / ${visibleCards})`;

	const cards = Array.from({ length: totalCards }, (_, index) => ({
		id: index + 1,
		title: `Card ${index + 1} Lorem ipsum dolor sit amet consectetur adipisicing elit`,
	}));

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
					{cards.map((card) => 
                        React.cloneElement(children, { key: card.id, title: card.title })
                    )}
				</div>
			</div>
			<button
				className="slider-btn next-btn"
				onClick={handleNext}
				disabled={currentIndex + visibleCards >= totalCards}
			>
				<img src={nextIcon} alt="next" />
			</button>
		</div>
	);
}

export default MultiCarousel;
