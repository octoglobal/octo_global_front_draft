import React from 'react';
import 'normalize.css';
import '../src/styles/globals.css';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import MainLayout from '@/layout/MainLayout/MainLayout';
import {store, persistor} from '../src/store/store';
import {PersistGate} from 'redux-persist/integration/react';
import HeaderLayout from '@/layout/HeaderLayout/HeaderLayout';
function MyApp({Component, pageProps}: AppProps) {
	const isActiveWebsite = true;
	return (
		isActiveWebsite ? (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<HeaderLayout>
						<MainLayout>
							<Component {...pageProps} />
						</MainLayout>
					</HeaderLayout>
				</PersistGate>
			</Provider>
		) : <h1 style={{textAlign: 'center'}}>Работа сайта временно приостановлена</h1>
	);
}

export default React.memo(MyApp);
