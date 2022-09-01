import PropTypes, {oneOfType} from 'prop-types';
import {createContext, useContext} from 'react';
import {useText} from '../hooks/useText';
import {holidayContext} from './holidayContext';

export const textContext = createContext({});

export const TextContextProvider = ({children}) => {
	const {holiday} = useContext(holidayContext);
	const [text] = useText(holiday);

	return (
		<textContext.Provider value={{text}}>
			{children}
		</textContext.Provider>
	);
};

TextContextProvider.propTypes = {
	children: oneOfType([
		PropTypes.object,
	])
};
