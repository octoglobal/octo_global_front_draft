import React from 'react';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import BlogNewPost from '@/components/Blog/BlogNewPost/BlogNewPost';
import {useUserStore} from '@/hooks/useUserStore';
import BlogList from '@/components/Blog/BlogList/BlogList';
import {useBlogPageStyle} from '@/components/Blog/style';

const BlogPage = () => {

	const {
		isAdmin
	} = useUserStore();

	return (
		<>
			<HeaderMargin/>
			<ContainerMUI>
				{!isAdmin && (
					<BlogNewPost/>
				)}
				<BlogList/>
			</ContainerMUI>
		</>
	);
};

const {
	ContainerMUI
} = useBlogPageStyle();

export default React.memo(BlogPage);
