import {useState} from 'react';

export const useBlogNewPost = () => {
	const [isNewPost, setIsNewPost] = useState<boolean>(false);

	const handleToggleNewPost = () => {
		setIsNewPost(prevState => !prevState);
	};

	return {
		isNewPost,
		handleToggleNewPost
	};
};
