import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<title>OCTO-GLOBAL</title>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
