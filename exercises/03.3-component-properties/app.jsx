import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	// 1) Replace the hard-coded image, description, link, etc. With their property variable
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	imageUrl: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string,
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(
	<>
		<BootstrapCard
			title={"Bob Dylan"}
			imageURL={"https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"}
			text={"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."}
			buttonUrl={"https://en.wikipedia.org/wiki/Bob_Dylan"}
			buttonLabel={"Go to wikipedia"}
		/>
		<BootstrapCard
			title={"Paul McCartney"}
			imageURL={
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Show_Paul_McCartney_S%C3%A3o_Paulo-26_de_mar%C3%A7o_de_2019_04.jpg/800px-Show_Paul_McCartney_S%C3%A3o_Paulo-26_de_mar%C3%A7o_de_2019_04.jpg"
			}
			text={
				"Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter and musician who gained worldwide fame with the Beatles, for whom he played bass guitar and shared primary songwriting and lead vocal duties with John Lennon. One of the most successful composers and performers of all time, McCartney is known for his melodic approach to bass-playing, versatile and wide tenor vocal range, and musical eclecticism, exploring genres ranging from pre–rock and roll pop to classical, ballads, and electronica. His songwriting partnership with Lennon is the most successful in modern music history."
			}
			buttonUrl={"https://en.wikipedia.org/wiki/Paul_McCartney"}
			buttonLabel={"Go to wikipedia"}
		/>
	</>,
	document.querySelector("#myDiv")
);
