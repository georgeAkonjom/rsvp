import "../styles/scroll.css";

function ScrollText({ textcontent }) {
	return (
		<div id="scroll-container">
			<div id="scroll-text">{textcontent}</div>
		</div>
	);
}

export default ScrollText;
