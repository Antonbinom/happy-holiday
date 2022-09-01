import {useEffect, useState} from 'react';
import {URI_API} from '../api/const';


export const useImg = holiday => {
	const [image, setImage] = useState('');
	useEffect(() => {
		if (!holiday) return;
		fetch(`${URI_API}image/${holiday}`)
			.then(res => {
				if (res.status !== 200) {
					throw new Error(res.status);
				}
				return res.json();
			})
			.then(data => {
				console.log(data.urlImg);
				if (data.urlImg) {
					setImage(data.urlImg);
				}
			})
			.catch(err => console.error(err.messaga));
	}, [holiday]);
	return [image];
};
