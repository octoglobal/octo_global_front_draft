import React, {FC} from 'react';
import Head from 'next/head';

interface HeaderLayout {
	children: React.ReactChild | React.ReactNode;
    title?: string
}

const HeaderLayout: FC<HeaderLayout> = ({
	children,
	title ='OCTO-GLOBAL'
}) => {

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</>
			
			
		
	);
};

export default React.memo(HeaderLayout);
