import React, { useState } from "react";
import "./styles.css";
import prevIcon from "../../assets/images/prev_icon.svg";
import nextIcon from "../../assets/images/next_icon.svg";

const Slider = () => {
	const [current, setCurrent] = useState(0);

	const images = [
		"https://images3.alphacoders.com/106/1069102.jpg",
		"https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
		"https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
		"https://images5.alphacoders.com/112/thumb-1920-1123013.jpg",
	];

	const handleNextSlide = () => {
		setCurrent(current === images.length - 1 ? 0 : current + 1);
	};

	const handlePrevSlide = () => {
		setCurrent(current === 0 ? images.length - 1 : current - 1);
	};

	return (
		<div className="slider-container">
			<div className="slider">
				<div
					className="list"
					style={{ transform: `translateX(${-current * 100}%)`, transition: "0.5s ease-in-out" }}
				>
					{images.map((image, index) => (
						<img key={index} src={image} alt="slide" className={index === current ? "active" : ""} />
					))}
				</div>
				<div className="slider-buttons">
					<button className="btn-prev" onClick={handlePrevSlide}>
						<img src={prevIcon} alt="prev" />
					</button>
					<button className="btn-next" onClick={handleNextSlide}>
						<img src={nextIcon} alt="next" />
					</button>
				</div>
				<ul className="dots">
					{images.map((_, index) => (
						<li
							key={index}
							className={index === current ? "active dot" : "dot"}
							onClick={() => setCurrent(index)}
						></li>
					))}
				</ul>
				<span className="indicator">
					{current + 1} / {images.length}
				</span>
			</div>
		</div>
	);
};

export default Slider;
