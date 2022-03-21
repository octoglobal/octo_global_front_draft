import {useRouter} from 'next/router';

export const useCustomRouter = () => {

	const router = useRouter();
	const {query} = router;

	return {
		query,
		router,
	};
};
