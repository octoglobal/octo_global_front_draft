import {Checkbox, styled} from '@mui/material';

export const useCheckboxUIV2Styles = () => {

	const StyleCheckboxMUI = styled(Checkbox)(() => ({
		padding: '3px',
	}));

	return {
		StyleCheckboxMUI
	};
};
