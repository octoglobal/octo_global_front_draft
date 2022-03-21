import React from 'react';
import {useConfirm} from '@/components/Confirm/useConfirm';

const Confirm = () => {

	const {isUserConfirm} = useConfirm();

	return (
		<div>
			{isUserConfirm && <h1>true</h1>}
			{!isUserConfirm && <h1>false</h1>}
		</div>
	);
};

export default React.memo(Confirm);
