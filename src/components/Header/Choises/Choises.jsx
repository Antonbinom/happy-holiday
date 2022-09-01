import style from './Choises.module.css';
import {useContext, useState} from 'react';
import {holidayContext} from '../../../context/holidayContext';


export const Choises = () => {
	const [isOpenChoises, setIsOpenChoises] = useState(false);
	const {holiday, holidays, changeHoliday} = useContext(holidayContext);

	const toggleChoises = () => {
		setIsOpenChoises(!isOpenChoises);
	};

	return (
		<div className={style.wrapper}>
			<button className={style.button} onClick={toggleChoises}>
				{holidays[holiday] || 'Выбрать праздник'}</button>
			{isOpenChoises && (
				<ul className={style.list}>
					{Object.entries(holidays).map(item =>
					(<li
						className={style.item}
						key={item[0]}
						onClick={() => {
							changeHoliday(item[0]);
							toggleChoises();
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
