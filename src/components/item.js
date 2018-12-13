import styled from "styled-components";

export default ({ image, children }) => (
    <Item>
        <ItemImage src={image} />
        <ItemContent>{children}</ItemContent>
    </Item>
);

const Item = styled.li`
    display: flex;
    margin: 5px 0px;
    height: 60px;
`;
const ItemImage = styled.img`
    border-radius: 50%;
    margin: 10px;
    width: 40px;
    flex-direction: row;
`;

const ItemContent = styled.div`
    flex-direction: row;
    width: 100%;
    height: 60px;
`;
