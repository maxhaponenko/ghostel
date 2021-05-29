import Document, { Head, Main, NextScript, Html } from 'next/document'
import favicon from '../public/images/favicon.png'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {

        // Styled-components setup START
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="shortcut icon" type="image/png" href={favicon} sizes="32x32" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Html />
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}