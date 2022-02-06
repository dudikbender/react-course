import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch(
			process.env.REACT_APP_DB_URL,
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			history.replace('/');
		});
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<section>
				<h1>Add New Meetup</h1>
				<NewMeetupForm onAddMeetup={addMeetupHandler} />
			</section>
		</motion.div>
	);
}

export default NewMeetupPage;
