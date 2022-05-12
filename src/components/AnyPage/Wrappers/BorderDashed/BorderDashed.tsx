import React, {FC} from 'react';

import {useBorderDashedStyle} from '@/components/AnyPage/Wrappers/BorderDashed/style';

interface IBorderDashed {
	children: React.ReactChild | React.ReactNode;
	title: string;
}

const BorderDashed : FC<IBorderDashed> = ({title, children}) => {
	return (
		<DashedBoxMUI>
			<ContentMUI>
				<TypographyMUI>{title}</TypographyMUI>
				{children}
			</ContentMUI>
		</DashedBoxMUI>
	);
};

const {
	DashedBoxMUI,
	ContentMUI,
	TypographyMUI
} = useBorderDashedStyle();

export default React.memo(BorderDashed);
