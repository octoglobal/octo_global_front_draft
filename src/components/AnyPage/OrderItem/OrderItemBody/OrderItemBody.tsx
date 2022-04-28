import React, {FC} from 'react';
import {useOrderItemBodyStyles} from '@/components/AnyPage/OrderItem/OrderItemBody/style';
import {IOrderModel} from '@/models/IOrderModel';
import BoxIcon from '@/UIIcon/Busket.svg';
import ArrowBlueIcon from '@/UIIcon/Arrow_Blue.svg';

type OrderItemBodyProps =
	Pick<IOrderModel, 'tracking_link' | 'trackNumber' | 'comment' | 'title'>

interface IOrderItemBodyProps {
	visibleTrackNumber?: boolean
}

const OrderItemBody: FC<OrderItemBodyProps & IOrderItemBodyProps> = (
	{
		title,
		trackNumber,
		tracking_link,
		comment,
		visibleTrackNumber = false,
	}
) => {
	return (
		<ContainerMUI>
			<IconMUI>
				<BoxIcon/>
			</IconMUI>
			<TextMUI>
				<TitleMUI>
					{title}
				</TitleMUI>
				{visibleTrackNumber && (
					<LinkContainerMUI>
						<TrackNumberMUI>
							{trackNumber}
						</TrackNumberMUI>
						<LinkMUI
							href={tracking_link}
							target='_blank'
							rel='noreferrer'
						>
							<a>
								Отследить
								<ArrowBlueIcon/>
							</a>
						</LinkMUI>
					</LinkContainerMUI>
				)}
				<CommentMUI>
					{comment}
				</CommentMUI>
			</TextMUI>
		</ContainerMUI>
	);
};

const {
	IconMUI,
	TextMUI,
	TitleMUI,
	LinkMUI,
	CommentMUI,
	ContainerMUI,
	TrackNumberMUI,
	LinkContainerMUI,
} = useOrderItemBodyStyles();

export default React.memo(OrderItemBody);
