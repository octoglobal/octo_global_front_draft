import React from 'react';
import type {NextPage} from 'next';
import BlogPage from '@/components/Blog/BlogPage';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Blog: NextPage = () => {

	return (
		<HeaderLayout>
			<BlogPage />
		</HeaderLayout>
	);
};

export default React.memo(Blog);
