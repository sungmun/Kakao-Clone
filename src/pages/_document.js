import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();

        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props =>
                    sheet.collectStyles(<App {...props} />)
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [initialProps.styles, ...sheet.getStyleElement()]
        };
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                </Head>
                <body style={{ width: "50vh", margin: "0 auto" }}>
                    <div>
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }
}
