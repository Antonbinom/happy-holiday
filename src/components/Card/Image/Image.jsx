import style from './Image.module.css';
import img from './img/card-bg.jpg';
import PropTypes from 'prop-types';

export const Image = ({children}) => (
	<div className={style.image}>
		<img className={style.img} src={img} />
		{children}
	</div>
);

Image.propTypes = {
	children: PropTypes.object
};
