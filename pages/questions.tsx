import React from 'react';
import type {NextPage} from 'next';
import QuestionsPage from '@/components/Questions/Questions';

const Questions: NextPage = () => {

	return (
		<QuestionsPage/>
	);
};

export default React.memo(Questions);
