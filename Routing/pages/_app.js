import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import axios from "axios";

import initstore from "../store";
import { getToken } from "../utils/auth";
import { login } from "../actions/user";

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

    LoginAjax = (token, successCall) => {
        axios
            .get("/user", { params: { token } })
            .then(res => successCall(res.data))
            .catch(err => console.error(err));
    };

    isToken = token => (token === "" || token == undefined ? false : true);

    componentDidMount() {
        if (window.location.href === "/login") return;

        const token = getToken();
        if (!this.isToken(token)) Router.push({ pathname: "/login" });

        const store = this.props.store;

        if (store.user === undefined) {
            this.LoginAjax(token, user => store.dispatch(login(user)));
        }
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
