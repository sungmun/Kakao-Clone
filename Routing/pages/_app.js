import App, { Container } from "next/app";
import Router from "next/router";
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
    //, user =>
    LoginAjax = token => {
        axios
            .get("http://localhost:5000/user", {
                headers: { "x-access-token": token }
            })
            .then(data =>
                this.props.store.dispatch(login(data.message.profile))
            )
            .catch(err => {
                if (err.response.data.message)
                    Router.push({ pathname: "/login" });
            });
    };

    isToken = token => (token === "" || token == undefined ? false : true);

    componentDidMount() {
        if (window.location.pathname === "/login") return;

        const token = getToken();
        if (!this.isToken(token)) Router.push({ pathname: "/login" });

        const store = this.props.store;

        if (store.user === undefined) {
            this.LoginAjax(token);
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
