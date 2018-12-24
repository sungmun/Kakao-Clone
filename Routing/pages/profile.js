import styled from "styled-components";
import { connect } from "react-redux";
import Info from "../components/profile/info";
const Layouts = styled.div`
    background: rgba(0, 80, 113, 0.8);
    height: 100vh;
    border: 0.1vh;
    border-style: solid;
    border-color: black;
    font-family: "Malgun Gothic";
    position: relative;
`;
const Image = styled.div`
    background: black;
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    left: 50%;
    right: 50%;
    transform: translate(-50%, 0%);
    width: 20vh;
    height: 20vh;
    bottom: 35vh;
`;
const Content = styled.div`
    text-align: center;
    position: absolute;
    background: white;
    padding: 3vh;
    bottom: 0vh;
    left: 0.1vh;
    right: 0.1vh;
    width: 53.7vh;
    height: 33vh;
`;

class Profile extends React.Component {
    render() {
        return (
            <Layouts>
                <Image />

                <Content>
                    <Info nickName="강성문" email="tjdans174@naver.com" />
                </Content>
            </Layouts>
        );
    }
}

export default connect()(Profile);
