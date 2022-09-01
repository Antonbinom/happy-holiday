import style from './Choises.module.css';
import {useContext, useState} from 'react';
import {holidayContext} from '../../../context/holidayContext';

const holidays = {
	newyear: 'Новый Год',
	birthdayWoman: 'День рождения Ж',
	birthdayMan: 'День рождения М',
	womanday: '8 Марта',
	knowledgeday: 'День знаний',
};
export const Choises = () => {
	const [isOpenChoises, setIsOpenChoises] = useState(false);
	const {holiday, setHoliday} = useContext(holidayContext);

	const toggleChoises = () => {
		setIsOpenChoises(!isOpenChoises);
	};

	const changeHoliday = title => {
		setHoliday(title);
		toggleChoises();
	};

	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoises}>{holiday}</button>
			{isOpenChoises && (
				<ul className={style.list}>
					{Object.entries(holidays).map(item =>
					(<li
						className={style.item}
						key={item[0]}
						onClick={() => {
							changeHoliday(item[1]);
						}}
					>
						{item[1]}
					</li>)
					)}
				</ul>
			)}
		</div>
	);
};
