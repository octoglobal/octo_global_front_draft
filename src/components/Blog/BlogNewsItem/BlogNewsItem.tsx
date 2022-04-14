import React, {FC} from 'react';
import {useBlogNewsItemStyle} from '@/components/Blog/BlogNewsItem/style';

// import TestImage from '../../../UI/UIIcon/TestImage.svg';
import CustomLinkUI from '../../../UI/UIComponents/LinkUI/LinkUI';
import { Divider } from '@mui/material';

interface IBlogNewsItem {
	title: string
	text: string
}

const BlogNewsItem : FC<IBlogNewsItem> = ({title, text}) => {
	return (
		<BlogNewsMUI>
			<TitleMUI>{title}</TitleMUI>
			<ImageMUI>
				{/*<TestImage />*/}
			</ImageMUI>
			<NewsBottomMUI>
				<MainTextMUI>
					<TextMUI>{text.substring(0, 233)}...</TextMUI>
				</MainTextMUI>
				{/*<ButtonUI sx={ButtonReadMore}>*/}
				{/*	Показать полностью*/}
				{/*</ButtonUI>*/}
				<LinkMUI>
					<CustomLinkUI>
						Показать полностью
					</CustomLinkUI>
				</LinkMUI>
			</NewsBottomMUI>
			<Divider sx={{
				border: '1px solid #C4C4C4',
				marginTop: '33px'
			}}
			/>
		</BlogNewsMUI>
	);
};

export default React.memo(BlogNewsItem);

const {
	BlogNewsMUI,
	TitleMUI,
	NewsBottomMUI,
	TextMUI,
	ImageMUI,
	LinkMUI,
	MainTextMUI,
	// ButtonReadMore
} = useBlogNewsItemStyle();
