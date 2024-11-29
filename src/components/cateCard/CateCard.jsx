import React from "react";
import category from "../../assets/images/category.png";
import "./styles.css";

const CateCard = ({key, title}) => {
	return (
		<div  className="card" key={key}>
			<img src={category} alt="category" />
			<p>{title}</p>
		</div>
	);
};

export default CateCard;
