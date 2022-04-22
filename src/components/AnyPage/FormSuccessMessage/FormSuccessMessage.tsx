import React, {FC} from 'react';
import {styled} from '@mui/material';

interface IFormSuccessMessageProps {
	message: string
}

const FormSuccessMessage: FC<IFormSuccessMessageProps> = ({message = ''}) => {
	return (
		<MessageMUI>
			{message}
		</MessageMUI>
	);
};


const MessageMUI = styled('span')(() => ({
	fontSize: '14px',
	lineHeight: '16px',
	fontWeight: 400,
	marginBottom: '15px',
	color: '#274D82',
	minHeight: '16px',
}));

export default React.memo(FormSuccessMessage);
