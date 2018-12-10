import styled from "styled-components";
import Head from "next/head";

export default ({ children }) => (
    <Header>
        <Head>
            <title>Kako Talk</title>
        </Head>
        <Container>{children}</Container>
    </Header>
);

const Header = styled.div``;
const Container = styled.div`
    border: 0.5px;
    border-style: solid;
    border-color: rgb(230, 230, 230);
`;
