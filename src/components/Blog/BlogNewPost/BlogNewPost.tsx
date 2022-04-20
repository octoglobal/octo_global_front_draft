import React from 'react';
import PlusIcon from '@/UIIcon/PlusIcon.svg';
import {useBlogNewPostStyles} from '@/components/Blog/BlogNewPost/style';
import {useBlogNewPost} from '@/components/Blog/BlogNewPost/useBlogNewPost';
import BlogFields from '@/components/Blog/BlogNewPost/BlogFields/BlogFields';

const BlogNewPost = () => {

	const {
		isNewPost,
		handleToggleNewPost
	} = useBlogNewPost();

	return (
		<>
			<AddButtonMUI
				onClick={handleToggleNewPost}
			>
				<AddButtonWrapperMUI>
					<PlusIcon/>
					<AddButtonTextMUI>
						Добавить пост
					</AddButtonTextMUI>
				</AddButtonWrapperMUI>
			</AddButtonMUI>
			<BlogFields
				open={isNewPost}
			/>
		</>
	);
};

const {
	AddButtonMUI,
	AddButtonTextMUI,
	AddButtonWrapperMUI
} = useBlogNewPostStyles();


export default React.memo(BlogNewPost);
