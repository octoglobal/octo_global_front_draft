import React from 'react';
import type {NextPage} from 'next';
import ConfirmPage from '@/components/Confirm/Confirm';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Confirm: NextPage = () => {
	return(
		<HeaderLayout>
			<ConfirmPage/>
		</HeaderLayout>
	);
    
};

export default React.memo(Confirm);
