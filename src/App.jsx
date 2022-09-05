import Card from './components/Card';
import {Route, Routes} from 'react-router-dom';
import {EmptyCard} from './components/EmptyCard/EmptyCard';
import {Layout} from './components/Layout/Layout';

const App = () => (
	<>
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<EmptyCard />} />
				<Route path='card/:holiday' element={<Card />} />
			</Route>
			<Route path='singleCard/:idText/:idImg' element={<Card />} />
		</Routes>
	</>
);

export default App;
