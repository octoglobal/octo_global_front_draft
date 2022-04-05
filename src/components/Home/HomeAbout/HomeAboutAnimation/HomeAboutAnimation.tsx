import React, {FC} from 'react';

interface IHomeAboutAnimationProps {
	children: React.ReactChildren | React.ReactNode;
}

const HomeAboutAnimation: FC<IHomeAboutAnimationProps> = ({children}) => {
	return (
		<>
			{children}
		</>
	);
};

export default React.memo(HomeAboutAnimation);
