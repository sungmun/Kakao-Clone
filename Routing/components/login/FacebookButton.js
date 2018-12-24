import styled from "styled-components";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import facebookApi from "../../api-key.json";
const FacebookLogin = dynamic(
    () => import("react-facebook-login/dist/facebook-login-render-props"),
    {
        ssr: false
    }
);

const FacebookButton = styled.button`
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
    background-color: #4c69ba;
    background-image: linear-gradient(#4c69ba, #3b55a0);
    font-family: "Helvetica neue", Helvetica Neue, Helvetica, Arial, sans-serif;
    text-shadow: 0 -1px 0 #354c8c;
    :before {
        border-right: #364e92 1px solid;
        background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")
            6px 6px no-repeat;
    }
    :hover,
    focus {
        background-color: #5b7bd5;
    }
`;

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

class Facebook extends React.Component {
    responseFacebook = res => {
        const profile = {
            platforName: "facebook",
            socialId: res.email,
            nickName: res.name,
            photos: res.picture.data.url
        };
        this.props.Login(profile);
    };

    responseFail = res => {
        console.error(res);
    };

    render() {
        return (
            <Container>
                <FacebookLogin
                    appId={facebookApi}
                    // autoLoad
                    version="3.1"
                    callback={this.responseFacebook}
                    fields="name,email,picture"
                    render={renderProps => (
                        <FacebookButton onClick={renderProps.onClick}>
                            Login with Facebook
                        </FacebookButton>
                    )}
                />
            </Container>
        );
    }
}

export default connect()(Facebook);
