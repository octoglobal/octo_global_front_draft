import {useState} from 'react';
import {useFormContext} from 'react-hook-form';

export const useAdminBottomMenu = () => {
	const {
		reset
	} = useFormContext();

	const [isChecked, setIsChecked] = useState<boolean>(true);

	const handleToggleChecked = () => {
		if (isChecked) {
			setIsChecked(false);
			reset({});
		} else {
			setIsChecked(true);
		}
	};

	return {
		isChecked,
		handleToggleChecked,
	};
};
