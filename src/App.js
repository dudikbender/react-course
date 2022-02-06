import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
	const location = useLocation();
	return (
		<Layout>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact={true}>
						<AllMeetupsPage />
					</Route>
					<Route path='/new-meetup'>
						<NewMeetupPage />
					</Route>
					<Route path='/favourites'>
						<FavouritesPage />
					</Route>
				</Switch>
			</AnimatePresence>
		</Layout>
	);
}

export default App;
