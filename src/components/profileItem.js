import styled from "styled-components";
import Item from "./item";

export default class ProfileItem extends React.Component {
    // static defaultProps = {
    //     image: "/static/resource/img_profile40_gray.png"
    // };

    render() {
        return (
            <Item image={this.props.image}>
                <CenterBox>
                    <NiceName>{this.props.nickName}</NiceName>
                    <Introduction>{this.props.intro}</Introduction>
                </CenterBox>
            </Item>
        );
    }
}
const Introduction = styled.div``;

const NiceName = styled.div`
    font-weight: 300;
`;
const CenterBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
