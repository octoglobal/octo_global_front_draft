import {useEffect, useState} from 'react';
import {octoAxios} from '@/lib/http';
import {useCustomRouter} from '@/hooks/useCustomRouter';

interface IQueryData {
	email: string;
	token: string;
}

export const useConfirm = () => {

	const {query} = useCustomRouter();
	const [isUserConfirm, setIsUserConfirm] = useState<boolean | null>(null);

	useEffect(() => {
		if (query) {
			const queryData = query as unknown as IQueryData;

			if (queryData.email && queryData.token) {
				octoAxios.post('mail_confirmation', {
					email: queryData.email,
					emailToken: queryData.token,
				}).then(response => {
					if (response.status == 200) return setIsUserConfirm(true);
					setIsUserConfirm(false);
				}).catch(() => setIsUserConfirm(false));
			}
		}
	}, [query]);

	return {
		isUserConfirm
	};
};
