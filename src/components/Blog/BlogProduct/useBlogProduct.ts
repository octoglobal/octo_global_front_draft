import {useMediaQuery} from '@mui/material';
import {useMemo} from 'react';
import {HOST} from '@/constants/constants';

export const useBlogProduct = (newPost: boolean, photo: string, url: string) => {
	const isTablet = useMediaQuery('(max-width: 768px)');

	const photoSrc = useMemo(() => {
		if (newPost) {
			return photo;
		}
		return `${HOST}/image/${photo}`;
	}, [photo]);

	const productLink = useMemo(() => {
		const linkObj = {
			nameLink: url,
			hrefLink: url
		};

		if (url) {
			const urlArray = url.split('/');
			const nameLink = urlArray[0].substring(1,);
			const hrefLink = urlArray.slice(1, ).join('/');
			linkObj.nameLink = nameLink;
			linkObj.hrefLink = hrefLink.substring(0, hrefLink.length - 1);
		}
		return linkObj;
	}, [url]);

	return {
		isTablet,
		photoSrc,
		productLink,
	};
};
