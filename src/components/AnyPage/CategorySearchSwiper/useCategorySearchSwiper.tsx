import {useEffect, useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {ICategoryModel, ICategoryModelResponse} from '@/models/ICategoryModel';

export const useCategorySearchSwiper = () => {
	const [categories, setCategories] = useState<ICategoryModel[] | null>();

	const isCategoriesArray = useMemo(() => (
		Array.isArray(categories) && categories?.length
	), [categories]);

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
		categories,
		isCategoriesArray
	};
};
