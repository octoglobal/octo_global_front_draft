import React from 'react';
import type {NextPage} from 'next';
import BlogPage from '@/components/Blog/BlogPage';

const Blog: NextPage = () => {

	return (
		<>
			<BlogPage />
		</>
	);
};

export default React.memo(Blog);
