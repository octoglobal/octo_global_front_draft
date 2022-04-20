import React from 'react';
import {useScrollTopStyles} from '@/components/AnyPage/ScrollTop/style';
import HeaderMargin from '@/components/AnyPage/Header/HeaderMargin/HeaderMargin';
import ScrollArrowTopIcon from '@/UIIcon/ScrollArrowTop.svg';
import ScrollTopMobileIcon from '@/UIIcon/ScrollTopMobile.svg';
import {useScrollTop} from '@/components/AnyPage/ScrollTop/useScrollTop';

const ScrollTop = () => {

	const {
		isTop,
		isMobile,
		isMountingScroll,
		handleClickButton
	} = useScrollTop();

	return (
		isMountingScroll ? (
			<WrapperMUI sx={animationVisible(isTop.direction, isTop.render, isMobile)}>
				{!isMobile && <HeaderMargin/>}
				<ScrollButtonMUI onClick={handleClickButton}>
					{!isMobile ? (
						<TextMUI>
							<TittleMUI>
								Наверх
							</TittleMUI>
							<ScrollArrowTopIcon/>
						</TextMUI>
					) : (
						<ScrollTopMobileIcon/>
					)}
				</ScrollButtonMUI>
			</WrapperMUI>
		) : null
	);
};

const {
	TextMUI,
	TittleMUI,
	WrapperMUI,
	ScrollButtonMUI,
	animationVisible,
} = useScrollTopStyles();

export default React.memo(ScrollTop);
