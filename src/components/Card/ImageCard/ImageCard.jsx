import style from './ImageCard.module.css';
import PropTypes from 'prop-types';
import {useContext} from 'react';
import {imageContext} from '../../../context/imageContext';

export const ImageCard = ({children}) => {
	const {image} = useContext(imageContext);
	return (
		<div className={style.image}>
			<img src={image} />
			{children}
		</div>
	);
};

ImageCard.propTypes = {
	img: PropTypes.string,
	children: PropTypes.object,
};
