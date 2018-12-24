import styled from "styled-components";
const Email = styled.p`
    padding-top: 2vh;
    padding-bottom: 2vh;
    color: rgba(84, 63, 63, 0.6);
    font-size: 8pt;
`;
export default ({ email }) => <Email>{email}</Email>;
