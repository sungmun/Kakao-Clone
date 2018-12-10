import styled from "styled-components";
import Layout from "./layout";
import Navigation from "./navigation";

const Contents = styled.div`
    margin: 1em;
`;
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

export default ({ children, searchText }) => (
    <Layout>
        <Navigation />
        <Search>
            <SearchIco src="/static/resource/search_icon.png" />
            <Input placeholder={searchText} />
        </Search>
        <Contents>{children}</Contents>
    </Layout>
);
