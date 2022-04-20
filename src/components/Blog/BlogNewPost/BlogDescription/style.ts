import { styled } from '@mui/material';

export const useBlogDescriptionStyles = () => {

	const TextAreaContainerMUI = styled('div')(() => ({
		marginBottom: '25px',
		'& > div': {
			height: '187px !important',
			'& > div': {
				height: '187px !important',
				'& > div': {
					padding: '13px 15px',
					height: '187px !important',
					'& > textArea': {
						paddingRight: '13px',
						height: '161px !important',
					}
				}
			}
		}
	}));

	return {
		TextAreaContainerMUI
	};
};
