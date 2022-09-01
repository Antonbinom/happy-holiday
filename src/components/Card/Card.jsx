import {Container} from '../Container/Container';
import style from './Card.module.css';
import {ImageCard} from './ImageCard/ImageCard';
import {Felicitation} from './Felicitation/Felicitation';

export const Card = () => (
	<div className={style.card}>
		<Container>
			<ImageCard >
				<Felicitation />
			</ImageCard>
		</Container>
	</div>
);
