import {useContext} from 'react';
import {textContext} from '../../../context/textContext';
import style from './Felicitation.module.css';

export const Felicitation = () => {
	const {text} = useContext(textContext);
	return (
		<p className={style.text}>
			{text}
		</p>
	);
};
