import React from 'react';
import type {NextPage} from 'next';

import ShopsPage from '../src/components/Shops/ShopsPage';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Shops : NextPage = () => {
	return (
		<HeaderLayout>
			<ShopsPage />
		</HeaderLayout>
   
	);
	
};


export default React.memo(Shops);
