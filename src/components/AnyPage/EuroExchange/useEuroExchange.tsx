import { useState } from 'react';


export const useEuroExchange = () => {
	

	const [editMode, setEditMode] = useState(false);

	

	
	
	return {	
		editMode,
		setEditMode
	};
};
