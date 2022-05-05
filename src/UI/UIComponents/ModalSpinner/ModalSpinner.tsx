import React, {FC } from 'react';
import { useModalUIStyles } from './style';
import CircularProgress from '@mui/material/CircularProgress';


export interface ISpinnerModalUIProps {
	open: boolean;
	
}
const ModalSpinner: FC<ISpinnerModalUIProps> = ({open})=> {

	return (
		<>
			<CustomBackdropMUI			
				open={open}					
			>
				<CircularProgress color="inherit" />
			</CustomBackdropMUI>
			
		</>
	);
};
const {
	CustomBackdropMUI,

} = useModalUIStyles();
export default React.memo(ModalSpinner);