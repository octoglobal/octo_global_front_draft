import React from 'react';
import 'normalize.css';
import '../src/styles/globals.css';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import MainLayout from '@/layout/MainLayout/MainLayout';
import {store, persistor} from '../src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

function MyApp({Component, pageProps}: AppProps) {

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</PersistGate>
		</Provider>
	);
}

export default React.memo(MyApp);
