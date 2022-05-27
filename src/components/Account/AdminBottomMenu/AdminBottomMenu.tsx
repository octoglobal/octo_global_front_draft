import React, {FC, useMemo} from 'react';
import {useAdminBottomMenuStyles} from '@/components/Account/AdminBottomMenu/style';
import AdminMenuCheckboxIcon from '@/UIIcon/AdminMenuCheckbox.svg';
import AdminMenuCheckboxEmptyIcon from '@/UIIcon/AdminMenuCheckboxEmpty.svg';
import {useAdminBottomMenu} from '@/components/Account/AdminBottomMenu/useAdminBottomMenu';
import WhiteCloseIcon from '@/UIIcon/WhiteCloseIcon.svg';
import {Checkbox} from '@mui/material';
import OrderDeleteModal from '@/components/AnyPage/OrderItem/OrderDeleteModal/OrderDeleteModal';

export interface IAdminMenuButton {
	name: string;
	onClick: (forDel:boolean) => void;
	isModalOpen?: boolean | undefined;
	message?: string;
}

interface IAdminBottomMenuProps {
	buttons: IAdminMenuButton[];
	text?: string;
	isVisibleMenu?: boolean;
	isVisibleComponents?: boolean;
}

const AdminBottomMenu: FC<IAdminBottomMenuProps> = (
	{
		buttons,
		text,
		isVisibleMenu = true,
		isVisibleComponents = true,
	}
) => {
	const {
		isChecked,
		isHideText,
		handleClickText,
		handleToggleChecked
	} = useAdminBottomMenu();


	const animation = useMemo(() => {
		if (isVisibleMenu) return animationSx;
		return  {};
	}, [isVisibleMenu]);
 


	return (
		isVisibleComponents ? (
			<ContainerMUI sx={animation}>
				{text && !isHideText && (
					<TextWrapperMUI>
						<TextMUI>
							{text}
						</TextMUI>
						<TextIconMUI
							onClick={handleClickText}
							disableTouchRipple={true}
						>
							<WhiteCloseIcon/>
						</TextIconMUI>
					</TextWrapperMUI>
				)}
				<WrapperMUI sx={
					isVisibleMenu ?
						{
							display: 'flex'
						} : {
							display:  'none',
						}
				}>
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
								onClick={() => button.onClick(false)}
							> 
								{button.name}
							</ButtonMUI>
						
						))}
					</ButtonWrapperMUI>
				
					{buttons.map((button, index) => (
						<OrderDeleteModal key={index}
							dialogProps={{
								open: !!button.isModalOpen,
								onClose: ()=>button.onClick(false)
							}}
							// title='Вы точно хотите удлать заказы?'
							title={button.message}
							onClickNo={()=>button.onClick(false)}
							onClickYes={() => button.onClick(true)}

						/>
					))}	
					{/* <OrderDeleteModal
						dialogProps={{
							open: !!btnObj.isModalOpen,
							onClose: ()=>btnObj.onClick(false)
						}}
						// title='Вы точно хотите удлать заказы?'
						title={btnObj.message}
						onClickNo={()=>btnObj.onClick(false)}
						onClickYes={() => btnObj.onClick(true)}

					/> */}


				</WrapperMUI>
			</ContainerMUI>
		) : null
	);
};

const {
	TextMUI,
	ButtonMUI,
	WrapperMUI,
	TextIconMUI,
	animationSx,
	ContainerMUI,
	TextWrapperMUI,
	ButtonWrapperMUI,
} = useAdminBottomMenuStyles();

export default React.memo(AdminBottomMenu);
