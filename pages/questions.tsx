import React from 'react';
import type {NextPage} from 'next';
import QuestionsPage from '@/components/Questions/Questions';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';

const Questions: NextPage = () => {

	return (
		<HeaderLayout>
			<QuestionsPage/>
		</HeaderLayout>
		
	);
};

export default React.memo(Questions);
