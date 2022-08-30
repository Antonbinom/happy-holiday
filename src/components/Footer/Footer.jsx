import style from './Footer.module.css';
import {Container} from '../Container/Container';
import {Info} from './Info/Info';
import {Socials} from './Socials/Socials';

export const Footer = () => (
	<div className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<Info className={style.info} />
				<Socials className={style.socials} />
			</div>
		</Container>
	</div>
);
