import PropTypes from 'prop-types';
import {createContext, useContext} from 'react';
import {useImg} from '../hooks/useImg';
import {holidayContext} from './holidayContext';

export const imageContext = createContext({});

export const ImageContextProvider = ({children}) => {
	const {holiday} = useContext(holidayContext);
	const [image, setImage] = useImg(holiday);

	return (
		<imageContext.Provider value={{image, setImage}}>
			{children}
		</imageContext.Provider>
	);
};

ImageContextProvider.propTypes = {
	children: PropTypes.array,
};
