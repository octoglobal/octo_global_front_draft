import {useRouter} from 'next/router';

export const useCustomRouter = () => {

	const router = useRouter();
	const {query} = router;

	const handlePushLocation = (location : string, query = {}) => {
		router.push({pathname: location, query: {...query}});
	};

	const getPathName = () => {
		return router.pathname;
	};

	return {
		query,
		router,
		pushTo: handlePushLocation,
		getPathName,
	};
};
