import styled from "styled-components";
import Link from 'next/link';


// const quickSetting=styled.div;

export default ({val})=>(
    <Nav>
        <Logo src="/static/resource/navi_img_logo.png" />
        <NavList>
            <Link href="#"><IconBox><Icon src="/static/resource/navi_btn_friend.png" /></IconBox></Link>
            <Link href="#"><IconBox><Icon src="/static/resource/navi_btn_chat.png" /></IconBox></Link>
            <Link href="#"><IconBox><Icon src="/static/resource/navi_btn_more.png" /></IconBox></Link>
        </NavList>
    </Nav>
)



const Nav=styled.div`
    background: rgb(66,54,48);
    padding: 15px;
`;

const NavList=styled.div``;

const IconBox=styled.div`
    display: inline-block;
    overflow:hidden;
    max-width:36px;
    max-height:36px;
    margin-top: 15px;
    margin-right: 20px;
`;
const Logo=styled.img``;

const Icon=styled.img`
    max-width: initial;
`;