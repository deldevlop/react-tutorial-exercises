import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

// Only update the value of this array
const navlinkItems = [
	<li className="nav-item">
		<a className="nav-link" href="">
			AAA
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="">
			AAA
		</a>
	</li>,
	<li className="nav-item">
		<a className="nav-link" href="">
			AAA
		</a>
	</li>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
