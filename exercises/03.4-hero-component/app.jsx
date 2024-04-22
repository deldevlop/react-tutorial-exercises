import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Hero = (props) => {
	return (
		<div class="container m-5 bg-secondary pt-5 pb-5 ps-4">
			<h1 class="display-4">{props.title}</h1>
			<p class="lead">{props.description}</p>
			<a class="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
	// Here you have to return expected html using the properties being passed to the component
};

Hero.propTypes = {
	// PropTypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonURL: PropTypes.string,
	buttonLabel: PropTypes.string,
};

ReactDOM.render(
	<Hero
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
