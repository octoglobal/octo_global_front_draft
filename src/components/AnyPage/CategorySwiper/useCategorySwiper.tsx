import {useCallback, useEffect, useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {ICategoryModel, ICategoryModelResponse} from '@/models/ICategoryModel';
import {Swiper as SwiperTypes} from 'swiper';
import {useFormContext} from 'react-hook-form';

export const useCategorySwiper = () => {
	const [initSwiper, setInitSwiper] = useState<SwiperTypes>();
	const [categories, setCategories] = useState<ICategoryModel[] | null>();
	const { control } = useFormContext();

	const onSwiper = useCallback((swiper: SwiperTypes) => {
		if (!initSwiper) {
			setInitSwiper(swiper);
		}
	}, []);

	const handleChangeSlide = (direction: 'next' | 'prev') => {
		return () => {
			if (initSwiper) {
				if (direction == 'next') initSwiper.slideNext();
				if (direction == 'prev') initSwiper.slidePrev();
			}
		};
	};

	const isCategoriesArray = useMemo(() => (
		Array.isArray(categories) && categories?.length
	), [categories]);

	const widthInName = (category: string) => {
		const width = category.length * 10 + 11;
		return {
			width: `${width}px`,
		};
	};

	useEffect(() => {
		try {
			octoAxios.get<ICategoryModelResponse>('/shops_tags').then(response => {
				setCategories(response.data.shops_tags);
			});
		} catch (e) {
			console.log(e);
		}
	}, []);

	return {
		control,
		onSwiper,
		initSwiper,
		categories,
		widthInName,
		handleChangeSlide,
		isCategoriesArray
	};
};
