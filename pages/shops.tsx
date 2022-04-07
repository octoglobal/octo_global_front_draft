import React from 'react';
import type {NextPage} from 'next';

import ShopsPage from '../src/components/Shops/ShopsPage';

const Shops : NextPage = () => <ShopsPage />;

export default React.memo(Shops);
