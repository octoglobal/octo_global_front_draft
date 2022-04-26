import React, {FC} from 'react';
import {useAdminBottomMenuStyles} from '@/components/Account/AdminBottomMenu/style';
import AdminMenuCheckboxIcon from '@/UIIcon/AdminMenuCheckbox.svg';
import AdminMenuCheckboxEmptyIcon from '@/UIIcon/AdminMenuCheckboxEmpty.svg';
import {useAdminBottomMenu} from '@/components/Account/AdminBottomMenu/useAdminBottomMenu';
import {Checkbox} from '@mui/material';

export interface IAdminMenuButton {
	name: string;
	onClick: () => void;
}

interface IAdminBottomMenuProps {
	buttons: IAdminMenuButton[]
}

const AdminBottomMenu: FC<IAdminBottomMenuProps> = ({buttons}) => {
	const {
		isChecked,
		handleToggleChecked
	} = useAdminBottomMenu();

	return (
		<ContainerMUI>
			<WrapperMUI>
				<Checkbox
					onClick={handleToggleChecked}
					checked={isChecked}
					icon={<AdminMenuCheckboxEmptyIcon/>}
					checkedIcon={<AdminMenuCheckboxIcon/>}
				/>
				<ButtonWrapperMUI>
					{buttons.map((button, index) => (
						<ButtonMUI
							key={`${button.name}${index}`}
							onClick={() => button.onClick()}
						>
							{button.name}
						</ButtonMUI>
					))}
				</ButtonWrapperMUI>
			</WrapperMUI>
		</ContainerMUI>
	);
};

const {
	ButtonMUI,
	WrapperMUI,
	ContainerMUI,
	ButtonWrapperMUI
} = useAdminBottomMenuStyles();

export default React.memo(AdminBottomMenu);
