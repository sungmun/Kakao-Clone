import styled from "styled-components";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { web } from "../google-api-key.json";

const GoogleButton = styled.button`
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
    background: #dd4b39;
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

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const GoogleLogin = dynamic(() => import("react-google-login"), { ssr: false });

class Google extends React.Component {
    responseGoogle = res => {
        const profile = {
            platforName: "google",
            socialId: res.profileObj.googleId,
            nickName: res.profileObj.email,
            photos: res.profileObj.imageUrl
        };
        this.props.Login(profile);
    };

    responseFail = res => {
        console.error(res);
    };

    render() {
        return (
            <Container>
                <GoogleLogin
                    clientId={web.client_id}
                    render={renderProps => (
                        <GoogleButton onClick={renderProps.onClick}>
                            Login with Google
                        </GoogleButton>
                    )}
                    onFailure={this.responseFail}
                    onSuccess={this.responseGoogle}
                />
            </Container>
        );
    }
}

export default connect()(Google);
