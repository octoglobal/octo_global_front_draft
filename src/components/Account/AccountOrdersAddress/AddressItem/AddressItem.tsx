import React, {FC, useMemo} from 'react';
import {IAddressModel} from '@/models/IAddressModel';
import {useAddressItemStyles} from '@/components/Account/AccountOrdersAddress/AddressItem/style';
import {useFormContext, useWatch} from 'react-hook-form';
import {Checkbox} from '@mui/material';
import CheckboxEmptyV2 from '@/UIIcon/CheckboxEmptyV2.svg';
import CheckBoxFillV2 from '@/UIIcon/CheckBoxFillV2.svg';
import {useCustomSize} from '@/hooks/useMedia';

const AddressItem: FC<IAddressModel> = (
	{
		id,
		name,
		surname,
		phone,
		address_string
	}
) => {

	const {
		setValue
	} = useFormContext();

	const {isCustomSize} = useCustomSize(500);

	const addressSelect = useWatch({name: 'addressSelect'});

	const getData = () => {
		return `${name} ${surname} ${phone} ${address_string}`;
	};

	const isActive = useMemo(() => (
		((addressSelect.text === getData()) && (addressSelect.id === id))
	), [addressSelect]);

	const handleClick = () => {
		if (!isActive) {
			setValue('addressSelect', {
				text: getData(),
				id: id,
			});
		} else {
			setValue('addressSelect', {
				text: undefined,
				id: undefined,
			});
		}
	};

	return (
		<WrapperMUI>
			{!isCustomSize && (
				<Checkbox
					onClick={handleClick}
					checked={isActive}
					icon={<CheckboxEmptyV2/>}
					checkedIcon={<CheckBoxFillV2/>}
				/>
			)}
			<ContainerMUI
				type='button'
				isActive={isActive}
				onClick={handleClick}
			>
				<ItemMUI>
					{name}
				</ItemMUI>
				<ItemMUI>
					{surname}
				</ItemMUI>
				<ItemMUI>
					{phone}
				</ItemMUI>
				<ItemMUI>
					{address_string}
				</ItemMUI>
			</ContainerMUI>
		</WrapperMUI>
	);
};

const {
	WrapperMUI,
	ItemMUI,
	ContainerMUI
} = useAddressItemStyles();

export default React.memo(AddressItem);
