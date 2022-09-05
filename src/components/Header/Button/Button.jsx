import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({children, disabled, changeContent}) => (
	<button
		disabled={disabled}
		className={style.button}
		onClick={() => {
			changeContent();
		}}
	>
		{children}
	</button>
);


Button.propTypes = {
	children: PropTypes.string,
	disabled: PropTypes.bool,
	changeContent: PropTypes.func,
};
