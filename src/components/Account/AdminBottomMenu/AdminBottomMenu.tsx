import React, {FC} from 'react';
import {useAdminBottomMenuStyles} from '@/components/Account/AdminBottomMenu/style';
import AdminMenuCheckboxIcon from '@/UIIcon/AdminMenuCheckbox.svg';

export interface IAdminMenuButton {
	name: string;
	onClick: () => void;
}

interface IAdminBottomMenuProps {
	buttons: IAdminMenuButton[]
}

const AdminBottomMenu: FC<IAdminBottomMenuProps> = ({buttons}) => {
	return (
		<ContainerMUI>
			<WrapperMUI>
				<AdminMenuCheckboxIcon/>
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
