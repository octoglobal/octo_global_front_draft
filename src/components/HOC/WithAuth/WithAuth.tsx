import React from 'react';

import {useUserStore} from '@/hooks/useUserStore';
import IndexPage from '@/components/Index/Index';

function WithAuth<P>(Component : React.ComponentType<P>) {
	const Auth = (props : P) => {
		const {isAuth} = useUserStore();

		if(!isAuth) return (
			<IndexPage/>
		);

		return (
			<Component {...props} />
		);
	};

	return Auth;
}

export default WithAuth;
