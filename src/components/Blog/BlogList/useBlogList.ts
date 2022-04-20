import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchNewsData} from '@/reducers/blogSlice/asyncThunk/blogApi';

export const useBlogList = () => {
	const {
		page,
		pageLimit,
		blogData,
	} = useAppSelector(state => state.blogReducer);
	const dispatch = useAppDispatch();

	const isBlogData = useMemo(() => (
		!!(blogData.length && Array.isArray(blogData))
	), [blogData]);

	useEffect(() => {
		dispatch(fetchNewsData({page: page, pageLimit}));
	}, []);

	return {
		blogData,
		isBlogData
	};
};
