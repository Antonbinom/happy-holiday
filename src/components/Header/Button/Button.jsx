import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({children}) => (
	<button className={style.button}>{children}</button>
);

Button.propTypes = {
	children: PropTypes.string,
};
