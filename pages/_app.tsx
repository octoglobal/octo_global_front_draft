import React from 'react';
import 'normalize.css';
import '../src/styles/globals.css';
import {Provider} from 'react-redux';
import type {AppProps} from 'next/app';
import {setupStore} from '@/store/store';
import MainLayout from '@/layout/MainLayout/MainLayout';

function MyApp({Component, pageProps}: AppProps) {

	const store = setupStore();

	return (
		<Provider store={store}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</Provider>
	);
}

export default MyApp;
