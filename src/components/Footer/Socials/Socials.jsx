import style from './Socials.module.css';
import {ReactComponent as VKIcon} from './img/vk.svg';
import {ReactComponent as TelegramIcon} from './img/tg.svg';
import {ReactComponent as PinterestIcon} from './img/pinterest.svg';
import {ReactComponent as StumbleIcon} from './img/stumbleupon.svg';

export const Socials = () => (
	<ul className={style.socials}>
		<li>
			<a href='https://vk.com' target='blank' className={style.link}>
				<VKIcon />
			</a>
		</li>
		<li>
			<a href='/' target='blank' className={style.link}>
				<TelegramIcon />
			</a>
		</li>
		<li>
			<a href='https://pinterest.com' target='blank' className={style.link}>
				<PinterestIcon />
			</a>
		</li>
		<li>
			<a href='/' target='blank' className={style.link}>
				<StumbleIcon />
			</a>
		</li>
	</ul>
);
