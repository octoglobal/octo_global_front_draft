import React, { FC, useMemo } from 'react';
import { IAddressModel } from '@/models/IAddressModel';
import { useAddressItemStyles } from '@/components/Account/AccountOrdersAddress/AddressItem/style';
import { useFormContext, useWatch } from 'react-hook-form';

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
		<ContainerMUI
			type='button'
			sx={isActive ? {'& > *': {fontWeight: 400}} : {}}
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
	);
};

const {
	ItemMUI,
	ContainerMUI
} = useAddressItemStyles();

export default React.memo(AddressItem);
