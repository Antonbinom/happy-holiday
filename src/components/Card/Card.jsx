import Container from '../Container';
import style from './Card.module.css';
import ImageCard from './ImageCard';
import Felicitation from './Felicitation';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchTextId} from '../../store/textSlice';
import {fetchImageId} from '../../store/imageSlice';

export const Card = () => {
	const {idText, idImg} = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		if (idImg && idText) {
			dispatch(fetchTextId(idText));
			dispatch(fetchImageId(idImg));
		}
	});

	return (
		<div className={style.card}>
			<Container>
				<ImageCard >
					<Felicitation />
				</ImageCard>
			</Container>
		</div>
	);
};
