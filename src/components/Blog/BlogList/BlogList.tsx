import React from 'react';
import {useBlogList} from '@/components/Blog/BlogList/useBlogList';
import BlogItem from '@/components/Blog/BlogItem/BlogItem';
import {useBlogListStyles} from '@/components/Blog/BlogList/style';

const BlogList = () => {

	const {
		blogData,
		isBlogData,
	} = useBlogList();

	return (
		<ListMUI>
			{isBlogData && (
				blogData.map((blogItem) => (
					<BlogItem
						key={`${blogItem.title}${blogItem.id}`}
						{...blogItem}
					/>
				))
			)}
		</ListMUI>
	);
};

const {
	ListMUI
} = useBlogListStyles();

export default React.memo(BlogList);
