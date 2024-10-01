import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firestore.js";
import "./App.css";
import AttendeeForm from "./components/form.jsx";
import AttendeeList from "./components/attendeeList.jsx";
import HeaderText from "./components/header.jsx";
import ScrollText from "./components/scrollText.jsx";

function App() {
	const [attendees, setAttendees] = useState();

	const getAttendees = async () => {
		const querySnapshot = await getDocs(
			collection(db, "attendees")
		);
		const attendeeNo = querySnapshot.size;
		const attendees = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		setAttendees(attendees);
	};

	useEffect(() => {
		getAttendees();
	}, []);

	return (
		<>
			<ScrollText textcontent={"Join us as we celeberate!... Address: 200 Wolf Road Albany, NY 12205... Date & Time: Sunay, October 20th, 4:00PM..."} />
			<div id="wrapper">
				<HeaderText
					title={"RSVP"}
					spanText={"See you there!"}
				/>
				<AttendeeForm />
				<HeaderText
					title={"Guest List"}
					spanText={"see who's attending"}
				/>
				<AttendeeList attendees={attendees} />
			</div>
		</>
	);
}

export default App;
