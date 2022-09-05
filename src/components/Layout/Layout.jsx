import style from './Layout.module.css';
import {useSelector} from 'react-redux';
import {Link, Outlet} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export const Layout = () => {
	const {text: {idText}, image: {idImg}} = useSelector(state => state);
	return (
		<>
			<Header />
			<Outlet />
			{idText && idImg && (
				<Link className={style.btn} to={`singleCard/${idText}/${idImg}`}>
					Поделиться
				</Link>
			)}
			<Footer />
		</>
	);
};
