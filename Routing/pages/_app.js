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
    //, user =>
    LoginAjax = token => {
        axios
            .get("http://localhost:5000/user", { params: { token } })
            .then(this.isSucess)
            .then(res => store.dispatch(login(res.data)))
            .catch(err => console.error(err));
    };
    isSucess = res => {
        if (res.status == 500) Router.push({ pathname: "/login" });
        return res;
    };

    isToken = token => (token === "" || token == undefined ? false : true);

    componentDidMount() {
        if (window.location.href === "/login") return;

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
