import style from './Footer.module.css';
import Container from '../Container';
import Info from './Info';
import Socials from './Socials';

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
