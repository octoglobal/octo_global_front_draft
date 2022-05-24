import {Checkbox, styled} from '@mui/material';

export const useCheckboxUIV3Styles = () => {

	const StyleCheckboxMUI = styled(Checkbox)(() => ({
		padding: '3px',
	}));

	return {
		StyleCheckboxMUI
	};
};
