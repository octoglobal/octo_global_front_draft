import {useEffect, useMemo, useState} from 'react';
import {IBlogModel} from '@/models/IBlogModel';
import {octoAxios} from '@/lib/http';
import {IFetchNewsDataRes} from '@/reducers/blogSlice/asyncThunk/blogApi';
import {useTouchDevice} from '@/hooks/useMedia';
import {Swiper as SwiperTypes} from 'swiper';

export const useHomeBlogSwiper = () => {
	const { isTouchDevice } = useTouchDevice();
	const [swiper, setSwiper] = useState<SwiperTypes | null>(null);
	// const [isLoadingBlog, setIsLoadingBlog] = useState<boolean>(false);
	const [blogData, setBlogData] = useState<IBlogModel[]>([]);
	const [page, setPage] = useState<number>(2);
	const [isBlogEnd, setIsBlogEnd] = useState<boolean>(false);
	const pageLimit = 10;

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

	const onSlideChange = (swiper: SwiperTypes) => {
		// prevSlideIndex = swiper.activeIndex;
		if (swiper.activeIndex === blogData.length - 3 && !isBlogEnd) {
			// setIsLoadingBlog(true);
			octoAxios.get<IFetchNewsDataRes>(`/blog?page=${page}&page_limit=${pageLimit}`).then(response => {
				const postsLength = response.data.posts.length;
				if (response.data.posts.length) {
					if (swiper.activeIndex > swiper.previousIndex) {
						setBlogData([...blogData, ...response.data.posts]);
					}
					if (swiper.activeIndex < swiper.previousIndex) {
						setBlogData([...response.data.posts, ...blogData]);
					}
					setPage(prevState => prevState + 1);
					if (postsLength < pageLimit) {
						setIsBlogEnd(true);
					}
					// setIsLoadingBlog(false);
				}
			});
		}
	};

	console.log(blogData);


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
		if (!blogData.length) {
			try {
				octoAxios.get<IFetchNewsDataRes>(`/blog?page=1&page_limit=${pageLimit}`).then(response => {
					if (response.data.posts.length) {
						setBlogData(response.data.posts);
					}
				});
			} catch (e) {
				throw new Error('Ошибка загрузки постов');
			}
		}
	}, []);

	return {
		onSwiper,
		blogData,
		// isLoadingBlog,
		onSlideChange,
		isTouchDevice,
		isBlogDataArray,
		handleChangeSlide,
	};
};
