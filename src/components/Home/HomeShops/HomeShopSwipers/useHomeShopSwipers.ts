import {useMemo} from 'react';
import {checkValidArray} from '@/services/services';
import {shopsData} from '@/components/Home/HomeShops/HomeShopsArray';

export const useHomeShopSwipers = () => {

	const getIntegerLength = (length: number) => Math.ceil(length / 2);

	const isShopsDataArray = useMemo(() => (
		checkValidArray(shopsData)
	), [shopsData]);

	const firstSwiperData = useMemo(() => {
		if (isShopsDataArray) {
			return shopsData.slice(0, getIntegerLength(shopsData.length));
		}
		return [];
	}, [isShopsDataArray]);

	const isFirstSwiperData = useMemo(() => (
		!!firstSwiperData.length
	), [firstSwiperData]);


	const secondSwiperData = useMemo(() => {
		if (isShopsDataArray) {
			return shopsData.slice(getIntegerLength(shopsData.length),);
		}
		return [];
	}, [isShopsDataArray]);

	const isSecondSwiperData = useMemo(() => (
		!!secondSwiperData.length
	), [secondSwiperData]);


	return {
		firstSwiperData,
		isFirstSwiperData,
		secondSwiperData,
		isSecondSwiperData,
		isShopsDataArray
	};
};
