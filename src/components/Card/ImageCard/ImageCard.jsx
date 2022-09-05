import style from './ImageCard.module.css';
import PropTypes from 'prop-types';
import imageBG from './img/card-bg.jpg';
import {useSelector} from 'react-redux';

export const ImageCard = ({children}) => {
	const {urlImg, loading} = useSelector(state => state.image);
	return (
		<div className={style.image}>
			<img src={loading === 'loading' ? imageBG : urlImg || imageBG} />
			{children}
		</div>
	);
};

ImageCard.propTypes = {
	img: PropTypes.string,
	children: PropTypes.object,
};
