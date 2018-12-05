import Document, { Head, Main, NextScript } from "next/document";
import Axios from "axios";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
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
                <body style={{ width: "512px", margin: "0 auto" }}>
                    <div>
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </html>
        );
    }
}
