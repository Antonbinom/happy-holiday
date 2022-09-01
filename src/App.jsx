import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';
import {TextContextProvider} from './context/textContext';
import {ImageContextProvider} from './context/imageContext';
import {HolidayContextProvider} from './context/holidayContext';

const App = () => (
	<>
		<HolidayContextProvider>
			<TextContextProvider>
				<ImageContextProvider>
					<Header />
					<Card />
					<Footer />
				</ImageContextProvider>
			</TextContextProvider>
		</HolidayContextProvider>
	</>
);

export default App;
