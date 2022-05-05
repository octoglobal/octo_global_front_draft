import React, { FC } from 'react';
import { useAddressCollapseStyles } from '@/components/Account/AccountOrdersAddress/AddressCollapse/style';
import { CollapseProps } from '@mui/material';
import AddLocationForm from '@/components/forms/AddLocationForm/AddLocationForm';
import {useMobile} from '@/hooks/useMedia';

interface IAddressCollapseProps {
	collapseProps: CollapseProps
	setOpenForm: (prevState : (state: boolean) => boolean) => void
}

const AddressCollapse: FC<IAddressCollapseProps> = ({collapseProps, setOpenForm}) => {
	const {isMobile} = useMobile();

	return (
		<CollapseMUI
			{...collapseProps}
		>
			<AddLocationForm
				buttonStyles={!isMobile ? buttonSx : buttonSxMobile}
				buttonSend={'Добавить'}
				isVisibleCancel={false}
				setOpenForm={setOpenForm}
				isAddressProperty={true}
			/>
		</CollapseMUI>
	);
};

const {
	buttonSx,
	buttonSxMobile,
	CollapseMUI
} = useAddressCollapseStyles();

export default React.memo(AddressCollapse);
