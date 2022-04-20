import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useReduxHooks';

export const useBlogNewPost = () => {
	const { blogData } = useAppSelector(state => state.blogReducer);
	const [isNewPost, setIsNewPost] = useState<boolean>(false);

	const handleToggleNewPost = () => {
		setIsNewPost(prevState => !prevState);
	};

	useEffect(() => {
		if (isNewPost) {
			setIsNewPost(false);
		}
	}, [blogData]);

	return {
		isNewPost,
		handleToggleNewPost
	};
};
