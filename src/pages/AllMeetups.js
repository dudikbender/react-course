import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(process.env.REACT_APP_DB_URL)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];
				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setLoadedMeetups(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<section>
				<h1>All Meetups</h1>
				<MeetupList meetups={loadedMeetups} />
			</section>
		</motion.div>
	);
}

export default AllMeetupsPage;
