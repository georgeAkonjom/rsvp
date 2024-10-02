import "../styles/form.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore.js";
import { useRef, useState } from "react";

function AttendeeForm() {
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const plusOneRef = useRef();

	const [required, setRequired] = useState();
	const [submitted, setSubmitted] = useState(
		"I'll be there!"
	);

	function isEmpty(str) {
		return !str.trim().length;
	}

	async function handleClick(event) {
		event.preventDefault();
		if (
			isEmpty(
				firstNameRef.current.value &&
					lastNameRef.current.value
			)
		) {
			let required = "Fill in First and Last Name.";
			setRequired(required);
		} else if (submitted == "Submitted!") {
			let required = "You're already on the list. Refresh!";
			setRequired(required);
		} else {
			let submitted = "Submitted!";
			const docRef = await addDoc(
				collection(db, "attendees"),
				{
					firstName: firstNameRef.current.value,
					lastName: lastNameRef.current.value,
					plusOne: plusOneRef.current.checked,
				}
			);
			console.log("Document written with ID: ", docRef.id);

			setSubmitted(submitted);
			console.log(
				firstNameRef.current.value,
				lastNameRef.current.value,
				plusOneRef.current.checked
			);
		}
	}

	return (
		<div id="formWrapper">
			<form onSubmit={handleClick}>
				<label htmlFor="firstName">First Name</label>
				<br />
				<input
					className="textField"
					id="firstName"
					ref={firstNameRef}
					placeholder="Jane"
					type="text"
					autoCapitalize="words"
				/>
				<br />

				<label htmlFor="lastName">Last Name</label>
				<br />
				<input
					className="textField"
					id="lastName"
					ref={lastNameRef}
					placeholder="Doe"
					type="text"
					autoCapitalize="words"
				/>
				<br />
				<span className="tiny">{required}</span>
				<br />

				<div className="plusOneContain">
					<br />
					<label htmlFor="plus one">
						Bringing a friend
					</label>
					<input
						ref={plusOneRef}
						id="plusonecheck"
						type="checkbox"
						name="plusOne"
					/>
				</div>
				<br />

				<button
					onClick={handleClick}
					id="submit"
					type="submit"
				>
					{submitted}
				</button>
			</form>
		</div>
	);
}

export default AttendeeForm;
