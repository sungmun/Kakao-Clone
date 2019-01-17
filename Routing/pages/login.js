import styled from "styled-components";
import Router from "next/router";
import axios from "axios";
import { connect } from "react-redux";

import FacebookButton from "../components/login/FacebookButton";
import GoogleButton from "../components/login/GoogleButton";
import { setToken } from "../utils/auth";
import { login } from "../actions/user";

const loginAction = login;

class Login extends React.Component {
    Login = profile => {
        axios
            .post("http://localhost:5000/user", { user: profile })
            .then(res => {
                this.saveUser(res.data.message.toke, profile);
                Router.push({ pathname: "/" });
            })
            .catch(err => console.error(err.response.data));
    };

    saveUser = (token, profile) => {
        setToken(token);
        this.props.loginAction(profile);
    };

    render() {
        return (
            <LoginBox>
                <LogoBox>
                    <LogoIcon
                        width="130"
                        src="/static/resource/kakao_logo.png"
                    />
                </LogoBox>
                <SocialLoginBox>
                    <GoogleButton Login={this.Login} />

                    <FacebookButton Login={this.Login} />

                    <KakaoButton>Login with Kakao</KakaoButton>
                </SocialLoginBox>
                <FooterBox>FooterBox</FooterBox>
            </LoginBox>
        );
    }
}

export default connect(
    undefined,
    { loginAction }
)(Login);

const LoginBox = styled.div`
    background-color: rgb(255, 243, 16);
    height: 750px;
    padding: 80px;
`;
const LogoBox = styled.div`
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;
const SocialLoginBox = styled.div`
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const LogoIcon = styled.img`
    margin-bottom: 30px;
`;
const SocialButton = styled.button`
    box-sizing: border-box;
    position: relative;
    width: 20em;
    margin: 0.2em;
    padding: 0 15px 0 15px;
    border: none;
    text-align: center;
    line-height: 50px;
    white-space: nowrap;
    border-radius: 0.2em;
    font-size: 16px;
    color: #fff;
`;

const KakaoButton = styled(SocialButton)`
    background: rgb(53, 24, 25);
    color: rgb(255, 243, 16);
    :before {
        border-right: #bb3f30 1px solid;
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
            6px 6px no-repeat;
    }
    :hover,
    focus {
        background: #e74b37;
    }
`;
const FooterBox = styled.div`
    border: 1px;
    border-style: solid;
`;
