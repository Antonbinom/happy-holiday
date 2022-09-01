import style from './Header.module.css';
import Container from '../Container';
import Button from './Button';
import Choises from './Choises';

export const Header = () => (
	<div className={style.header}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.buttons}>
					<Button>
						Поменять поздравление
					</Button>
					<Button>
						Поменять фон
					</Button>
				</div>
				<Choises />
			</div>
		</Container>
	</div>
);
