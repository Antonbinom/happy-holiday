import style from './Info.module.css';

export const Info = () => (
	<div className={style.info}>
		<ul className={style.list}>
			<li className={style.text}><a href='/'>
				Design: Anastasia Ilina
			</a></li>
			<li className={style.text}><a href='/'>
				Coder: Anton Semenikhin
			</a></li>
			<li className={style.text}></li>
			<li className={style.text}>HBCard, 2022</li>
		</ul>
	</div>
);
