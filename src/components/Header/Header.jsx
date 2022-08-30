import style from './Header.module.css';
import {Container} from '../Container/Container';
import {Button} from './Button/Button';
import {Choises} from './Choises/Choises';

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
