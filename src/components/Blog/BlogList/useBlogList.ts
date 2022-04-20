import {useAppDispatch, useAppSelector} from '@/hooks/useReduxHooks';
import {useEffect, useMemo} from 'react';
import {fetchNewsData} from '@/reducers/blogSlice/asyncThunk/blogApi';
import { blogSlice } from '@/reducers/blogSlice/blogSlice';

export const useBlogList = () => {
	const {
		page,
		pageLimit,
		blogData,
		updatePosts,
		blogEnd
	} = useAppSelector(state => state.blogReducer);
	const dispatch = useAppDispatch();

	const isBlogData = useMemo(() => (
		!!(blogData.length && Array.isArray(blogData))
	), [blogData]);

	const onScroll = (event: Event) => {
		const window = event.currentTarget as Window;
		if (window) {
			const bodyHeight = document.body.offsetHeight / 100 * 70;
			const offsetTop = window.scrollY + window.innerHeight;
			if (offsetTop > bodyHeight) {
				dispatch(blogSlice.actions.updatePosts());
			}
		}
	};

	useEffect(() => {
		dispatch(fetchNewsData({page: page, pageLimit}));
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	useEffect(() => {
		if (updatePosts && page > 1 && !blogEnd) {
			dispatch(fetchNewsData({page: page, pageLimit}));
		}
	}, [updatePosts]);

	return {
		blogData,
		isBlogData
	};
};
