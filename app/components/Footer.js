import React from 'react';
import { footer } from '../styles/footer.css';

/* let's use html5 semantics for page layout
https://www.w3schools.com/html/html5_semantic_elements.asp */
const Footer = () =>
	<footer className={footer}>
		<div className="footerContent">
			<div className="logo">Test</div>
		</div>
	</footer>;

export default Footer;
