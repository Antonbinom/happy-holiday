import Container from '../Container';
import style from './Card.module.css';
import ImageCard from './ImageCard';
import Felicitation from './Felicitation';

export const Card = () => (
	<div className={style.card}>
		<Container>
			<ImageCard >
				<Felicitation />
			</ImageCard>
		</Container>
	</div>
);
