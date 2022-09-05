import {useSelector} from 'react-redux';
import style from './Felicitation.module.css';

export const Felicitation = () => {
	const {text, loading} = useSelector(state => state.text);
	return (
		<p className={style.text}>
			{loading === 'loading' ? 'Загрузка...' :
				text === '' ? 'Выберите поздравление!' : text}
		</p>
	);
};
