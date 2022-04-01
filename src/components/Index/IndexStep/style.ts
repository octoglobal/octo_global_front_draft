import {styled} from '@mui/material';

export const useIndexStepStyle = () => {

	const IndexStepUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',
	}));

	const ImageUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'row',

		marginRight: '24px',
	}));

	const InfoUI = styled('div')(() => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	}));

	const TitleUI = styled('div')(() => ({
		fontSize: '16px',
		fontWeight: '400',

		marginBottom: '5px',
	}));

	const SubTitleUI = styled('div')(() => ({
		fontSize: '14px',
		lineHeight: '24px',
		color: '#3d4041',
	}));


	return {
		IndexStepUI,
		ImageUI,
		InfoUI,
		TitleUI,
		SubTitleUI
	};
};
