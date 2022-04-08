import React, {FC} from 'react';
import HomeAbout from '@/components/Home/HomeAbout/HomeAbout';
import HomeWorkExp from '@/components/Home/HomeWorkExp/HomeWorkExp';
import HomeConfidence from '@/components/Home/HomeConfidence/HomeConfidence';
// import HomeAddress from '@/components/Home/HomeAddress/HomeAddress';
// import HomeShops from '@/components/Home/HomeShops/HomeShops';

const IndexPage : FC = () => {
	return (
		<>
			<HomeAbout/>
			<HomeWorkExp/>
			<HomeConfidence/>
			{/*<HomeShops/>*/}
			{/*<HomeAddress/>*/}
		</>
	);
};

export default React.memo(IndexPage);
