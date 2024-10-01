import "../styles/attendeeList.css";

function AttendeeList({ attendees }) {
	return (
		<>
			{attendees ? (
				attendees.map((attendee, i) => (
					<ul key={attendee.id}>
						<li>
							{attendee.firstName}{" "}
							<span>{attendee.lastName}</span>
						</li>
						{attendee.plusOne ? (
							<li className="far">+ 1</li>
						) : (
							<li className="far">Just Me</li>
						)}
					</ul>
				))
			) : (
				<tr>
					<td>
						We cannot pull the data you need, there may be
						no data, or an issue with your internet
						connection.
					</td>
				</tr>
			)}
		</>
	);
}

export default AttendeeList;
