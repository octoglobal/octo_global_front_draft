import React from 'react';
import type {NextPage} from 'next';
import ReviewPage from '@/components/Review/ReviewPage';

const Reviews: NextPage = () => <ReviewPage/>;

export default React.memo(Reviews);
