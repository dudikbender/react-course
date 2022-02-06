import { useContext } from 'react';
import { motion } from 'framer-motion';

import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage() {
	const favouritesCtx = useContext(FavouritesContext);

    let content;

    if (favouritesCtx.totalFavourites === 0) {
        content = <p>No favourites, yet! Start adding some?</p>
    } else {
        content = <MeetupList meetups={favouritesCtx.favourites} />
    }

	return (
        <motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
            transition= {{ duration: 0.5 }}
		>
		<section>
			<h1>My Favourites</h1>
			{content}
		</section>
        </motion.div>
	);
}

export default FavouritesPage;
