import styled from "styled-components";
import Layout from "../components/layout";
import Profile from "../components/profileItem";

import { connect } from "react-redux";

class Index extends React.Component {
    render() {
        const { user } = this.props;
        const userProfile = user.profile;
        console.log(userProfile.photos);

        return (
            <Layout>
                <Search>
                    <SearchIco src="/static/resource/search_icon.png" />
                    <Input placeholder="이름검색" />
                </Search>
                <List>
                    <Profile
                        image={userProfile.photos}
                        nickName={userProfile.nickName}
                    />
                    <Profile image="/static/resource/img_profile40_gray.png" />
                </List>
            </Layout>
        );
    }
}

export default connect(({ user }) => ({ user }))(Index);

const Search = styled.div`
    width: 100%;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
`;
const Input = styled.input`
    font-size: 10pt;
    border: 0px;
    width: 475px;
    padding: 0px;
    padding-left: 36px;
    border-bottom: 0.8px;
    border-style: solid;
    border-color: rgb(230, 230, 230);
    height: 36px;
    ::placeholder {
        color: rgb(153, 153, 153);
    }
`;
const SearchIco = styled.img`
    position: absolute;
    margin: 10px;
    z-index: 1;
`;
const List = styled.ul`
    padding-left: 0px;
`;
const ProfileTitle = styled.div``;
