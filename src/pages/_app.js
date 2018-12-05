import App, { Container } from "next/app";
import React from "react";
import initstore from "../store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: {
                ...(Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {})
            }
        };
    }
    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}
export default withRedux(initstore)(MyApp);
