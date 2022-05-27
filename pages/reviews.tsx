import React from 'react';
import type {NextPage} from 'next';
import ReviewPage from '@/components/Review/ReviewPage';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Reviews: NextPage = () => {
	return (
		<HeaderLayout>
			<ReviewPage/>
		</HeaderLayout>
   
	);
	
};

export default React.memo(Reviews);
