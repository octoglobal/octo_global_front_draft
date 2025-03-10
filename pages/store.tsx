import React, {useEffect} from 'react';
import type {NextPage} from 'next';
import axios from 'axios';
import {HOST} from '@/constants/constants';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
const Store: NextPage = () => {

	useEffect(() => {
		axios.get('http://192.168.88.191:5000/test', {
			withCredentials: true,
			headers: {
				'Access-Control-Expose-Headers': true,
				'Access-Control-Allow-Origin': `${HOST}`,
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Headers': 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
			}
		});
	}, []);

	return (
		<>
			<HeaderLayout>
				<h1>Магазин</h1>
			</HeaderLayout>
		
		</>
	);
};

export default React.memo(Store);
