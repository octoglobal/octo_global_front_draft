import React, {FC} from 'react';
import {useHomeSectionTitleStyles} from '@/components/Home/HomeSectionTitle/style';
import {SxProps} from '@mui/material';

interface IHomeSectionTitleProps {
	title: string;
	sx?: SxProps;
}

const HomeSectionTitle: FC<IHomeSectionTitleProps> = ({title, sx = {}}) => {

	const { TitleMUI } = useHomeSectionTitleStyles();

	return (
		<TitleMUI sx={sx}>
			{title}
		</TitleMUI>
	);
};

export default React.memo(HomeSectionTitle);
