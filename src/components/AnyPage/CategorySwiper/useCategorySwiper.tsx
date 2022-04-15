import {useCallback, useMemo, useState} from 'react';
import {ICategoryModel} from '@/models/ICategoryModel';
import {Swiper as SwiperTypes} from 'swiper';
import {useFormContext} from 'react-hook-form';
import {useMediaQuery} from '@mui/material';

export const useCategorySwiper = (allTags: ICategoryModel[]) => {
	const [initSwiper, setInitSwiper] = useState<SwiperTypes>();
	const isTablet = useMediaQuery('(max-width: 1024px)');
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
		const size = isTablet ? 10 : 12;
		const safeSize = isTablet ? 10 : 15;
		const width = category.length * size + safeSize;
		return {
			width: `${width}px`,
		};
	};

	return {
		control,
		onSwiper,
		isTablet,
		initSwiper,
		widthInName,
		handleChangeSlide,
		isCategoriesArray
	};
};
