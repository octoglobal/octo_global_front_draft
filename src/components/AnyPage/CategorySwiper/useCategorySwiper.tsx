import {useCallback, useEffect, useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {ICategoryModel, ICategoryModelResponse} from '@/models/ICategoryModel';
import {Swiper as SwiperTypes} from 'swiper';
import {useFormContext} from 'react-hook-form';

export const useCategorySwiper = (allTags: ICategoryModel[]) => {
	const [initSwiper, setInitSwiper] = useState<SwiperTypes>();
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
		Array.isArray(allTags) && allTags?.length
	), [allTags]);

	const widthInName = (category: string) => {
		const width = category.length * 12 + 15;
		return {
			width: `${width}px`,
		};
	};

	return {
		control,
		onSwiper,
		initSwiper,
		widthInName,
		handleChangeSlide,
		isCategoriesArray
	};
};
