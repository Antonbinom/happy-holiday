import style from './Header.module.css';
import Container from '../Container';
import Choices from './Choices';
import {useDispatch} from 'react-redux';
import {fetchText} from '../../store/textSlice';
import {fetchImage} from '../../store/imageSlice';
import Button from './Button';
import {useParams} from 'react-router-dom';

export const Header = () => {
	const dispatch = useDispatch();
	const {holiday} = useParams();

	return (
		<div className={style.header}>
			<Container>
				<div className={style.wrapper}>
					<div className={style.buttons}>
						<Button
							disabled={!holiday}
							changeContent={() => {
								dispatch(fetchText(holiday));
							}}
						>
							Поменять поздравление
						</Button>
						<Button
							disabled={!holiday}
							changeContent={() => {
								dispatch(fetchImage(holiday));
							}}
						>
							Поменять фон
						</Button>
					</div>
					<Choices />
				</div>
			</Container>
		</div>
	);
};
