import {Footer} from './components/Footer/Footer';
import {Header} from './components/Header/Header';
import {Card} from './components/Card/Card';
import {TextContextProvider} from './context/textContext';
import {ImageContextProvider} from './context/imageContext';
import {HolidayContextProvider} from './context/holidayContext';

const App = () => (
	<>
		<TextContextProvider>
			<ImageContextProvider>
				<HolidayContextProvider>
					<Header />
				</HolidayContextProvider>
				<Card />
				<Footer />
			</ImageContextProvider>
		</TextContextProvider>
	</>
);

export default App;
