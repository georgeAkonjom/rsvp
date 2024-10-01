import "../styles/header.css";

function HeaderText({ title, spanText }) {
	return (
		<div className="headerText">
			<h1>{title}</h1>
			<span className="tiny">{spanText}</span>
		</div>
	);
}

export default HeaderText;
