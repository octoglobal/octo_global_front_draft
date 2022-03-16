import React from 'react';
import 'normalize.css';
import '../src/styles/globals.css';
import {Provider} from 'react-redux';
import {setupStore} from '../src/store/store';
import type {AppProps} from 'next/app';
import MainLayout from '../src/layout/MainLayout/MainLayout';

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
