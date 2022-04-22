import {useEffect, useMemo, useState} from 'react';
import {IBlogModel} from '@/models/IBlogModel';
import {octoAxios} from '@/lib/http';
import {IFetchNewsDataRes} from '@/reducers/blogSlice/asyncThunk/blogApi';
import {useTouchDevice} from '@/hooks/useMedia';
import {Swiper as SwiperTypes} from 'swiper';

export const useHomeBlogSwiper = () => {
	const { isTouchDevice } = useTouchDevice();
	const [swiper, setSwiper] = useState<SwiperTypes | null>(null);
	const [blogData, setBlogData] = useState<IBlogModel[]>([]);

	const onSwiper = (swiperData: SwiperTypes) => {
		if (!swiper) {
			setSwiper(swiperData);
		}
	};

	const handleChangeSlide = (direction: 'next' | 'prev' = 'prev') => {
		return () => {
			if (swiper) {
				if (direction === 'next') {
					swiper.slideNext();
				} else {
					swiper.slidePrev();
				}
			}
		};
	};

	const isBlogDataArray = useMemo(() => (
		blogData.length && Array.isArray(blogData)
	), [blogData]);


	useEffect(() => {
		if (swiper) {
			if (isTouchDevice) {
				swiper.autoplay.start();
			} else {
				swiper.autoplay.stop();
			}
		}
	}, [isTouchDevice, swiper]);

	useEffect(() => {
		try {
			octoAxios.get<IFetchNewsDataRes>('/blog?page=1&page_limit=5').then(response => {
				if (response.data.posts.length) {
					setBlogData(response.data.posts);
				}
			});
		} catch (e) {
			throw new Error('Ошибка загрузки постов');
		}
	}, []);

	return {
		onSwiper,
		blogData,
		isTouchDevice,
		isBlogDataArray,
		handleChangeSlide,
	};
};
