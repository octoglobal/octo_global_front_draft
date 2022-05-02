import React, { FC } from 'react';
import { useAddressCollapseStyles } from '@/components/Account/AccountOrdersAddress/AddressCollapse/style';
import { CollapseProps } from '@mui/material';
import AddLocationForm from '@/components/forms/AddLocationForm/AddLocationForm';

interface IAddressCollapseProps {
	collapseProps: CollapseProps
	setOpenForm: (prevState : (state: boolean) => boolean) => void
}

const AddressCollapse: FC<IAddressCollapseProps> = ({collapseProps, setOpenForm}) => {
	return (
		<CollapseMUI
			{...collapseProps}
		>
			<AddLocationForm
				buttonStyles={buttonSx}
				buttonSend={'Добавить'}
				isVisibleCancel={false}
				setOpenForm={setOpenForm}
			/>
		</CollapseMUI>
	);
};

const {
	buttonSx,
	CollapseMUI
} = useAddressCollapseStyles();

export default React.memo(AddressCollapse);
