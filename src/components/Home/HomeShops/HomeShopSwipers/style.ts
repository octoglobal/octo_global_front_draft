import {styled} from '@mui/material';

export const useHomeShopSwipersStyles = () => {

	const SwipersContainerMUI = styled('div')(() => ({
		marginBottom: '57px',
		'& > *:nth-of-type(1)': {
			'& > div.swiper-wrapper': {
				alignItems: 'flex-end',
				marginBottom: '50px',
				'& > div': {
					marginRight: '20px',
				}
			}
		},
		'& > *:nth-of-type(2)': {
			'& > div.swiper-wrapper': {
				'& > div': {
					marginRight: '20px',
				}
			}
		}
	}));

	return {
		SwipersContainerMUI
	};
};
