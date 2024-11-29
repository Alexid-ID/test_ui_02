import React from "react";
import logo from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search_icon.svg";
import "./styles.css";

const Header = () => {
	return (
		<header className="header" id="header">
			<a href="!#" className="logo">
				<img src={logo} alt="logo" />
			</a>
			<div className="search">
				<img src={searchIcon} alt="search" />
				<input type="text" className="search-input" placeholder="Search" />
			</div>
			<p className="header-text">Khám phá</p>
		</header>
	);
};

export default Header;
