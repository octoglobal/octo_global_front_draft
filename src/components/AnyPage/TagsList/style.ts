import {Collapse, Dialog, styled} from '@mui/material';

export const useCategoryListStyles = () => {

	const ContainerMUI = styled('div')(({theme}) => ({

	}));

	const ListMUI = styled('ul')(({theme}) => ({

	}));

	const CollapseMUI = styled(Collapse)(({theme}) => ({

	}));

	const ModalMUI = styled(Dialog)(({theme}) => ({

	}));

	return {
		ListMUI,
		ModalMUI,
		CollapseMUI,
		ContainerMUI
	};
};
