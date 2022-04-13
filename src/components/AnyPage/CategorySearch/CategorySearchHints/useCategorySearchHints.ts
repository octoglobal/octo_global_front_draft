import {useWatch} from 'react-hook-form';
import {useEffect, useMemo, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {IHints, IHintsResponse} from '@/components/AnyPage/CategorySearch/types';


export const useCategorySearchHints = () => {
	const [hintsData, setHintsData] = useState<IHints[]>([]);
	const searchValue = useWatch({name: 'search'});

	const isHintsData = useMemo(() => (
		Array.isArray(hintsData) && hintsData.length
	), [hintsData]);

	useEffect(() => {
		try {
			octoAxios.get<IHintsResponse>(`/shops?search_suggestions=${searchValue}`).then(response => {
				const hintsResponse = response.data.search_suggestions_results;
				if (hintsResponse) {
					setHintsData(hintsResponse);
				}
			});
		} catch (e) {
			console.log(e);
		}
	}, [searchValue]);

	return {
		hintsData,
		isHintsData
	};
};
