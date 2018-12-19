import styled from "styled-components";
import NickName from "./NickName";
import Email from "./email";
const Info = styled.div`
    margin: 4vh;
`;

export default ({ nickName, email }) => (
    <Info>
        <NickName nickName={nickName} />

        <Email email={email} />
    </Info>
);
