import PropTypes from 'prop-types';
import {createContext, useState} from 'react';
import cardImg from '../components/Card/ImageCard/img/card-bg.jpg';

export const imageContext = createContext({});

export const ImageContextProvider = ({children}) => {
	const [image, setImage] = useState(cardImg);

	return (
		<imageContext.Provider value={{image, setImage}}>
			{children}
		</imageContext.Provider>
	);
};

ImageContextProvider.propTypes = {
	children: PropTypes.array,
};
