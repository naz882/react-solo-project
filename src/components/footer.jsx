import React from "react";
import "./style.css";
import twitter from "./../assets/twitter.png";
import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.png";
import github from "./../assets/github.png";

const Footer = () => {
	return (
		<div className="footer">
			<a href="https://twitter.com/nazymguliyev" target="_blank">
				<img src={twitter} />
			</a>
			<a href="https://www.facebook.com/nazym.guliyev" target="_blank">
				<img src={facebook} />
			</a>
			<a href="https://www.instagram.com/guliyevn/" target="_blank">
				<img src={instagram} />
			</a>
			<a href="https://github.com/naz882" target="_blank">
				<img src={github} />
			</a>
		</div>

	)
}

export default Footer;