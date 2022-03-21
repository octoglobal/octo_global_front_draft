import {useEffect, useState} from 'react';
import {fetchUserRefresh} from '@/reducers/userSlice/asyncActions/userApi';

export const useUpdateRefresh = () => {
	const [newToken, setNewToken] = useState<boolean>(false);

	const updateToken = () => {
		fetchUserRefresh().then(response => {
			if (response.message === 'success') {
				setNewToken(true);
			}
			if (typeof response === 'number') {
				setNewToken(false);
			}
		});
	};

	useEffect(() => {
		updateToken();
	}, []);

	useEffect(() => {
		setTimeout(() => {
			updateToken();
		}, 1680000);
	}, []);


	return {
		newToken
	};
};
