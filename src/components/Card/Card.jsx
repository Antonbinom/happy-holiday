import {Container} from '../Container/Container';
import style from './Card.module.css';
import {Image} from './Image/Image';
import {Text} from './Text/Text';

export const Card = () => (
	<div className={style.card}>
		<Container>
			<div className={style.wrapper}>
				<Image>
					<Text />
				</Image>
			</div>
		</Container>
	</div>
);
