import react from "react";
import styled from "styled-components";

import SellerIntroHeader from "./SellerIntroHeader";
import SellerList from "./SellerList";

const Main = () => {
    return (
        <Wrapper>
            <Header>
                <Title>
                    <Logo src="/images/symbol_logo.png" />
                    <Nickname>Nickname</Nickname>
                </Title>
                <BtnLogout>로그아웃</BtnLogout>
            </Header>
            <SellerIntroHeader />
            <SellerList />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #1C1C1C;
    height: 100vh;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
`

const Title = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    height: 30px;
`

const Nickname = styled.h3`
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

const BtnLogout = styled.button`
    padding: 8px 25px;
    border-radius: 20px;
    border: 2px solid #88A9FF;
    color: #88A9FF;
    cursor: pointer;
`

const SellerIntro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: white;
    background: linear-gradient(to bottom, transparent, #1C1C1C),
    url("https://c.files.bbci.co.uk/151AB/production/_111434468_gettyimages-1143489763.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    margin-top: 80px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
`

const UserName = styled.h5`
    margin-top: 20px;
    font-size: 24px;
    font-weight: 600;
`

const HashTags = styled.div`
    margin: 20px 0;
    span {
        margin: 0 10px;
    }
`

const Introduce = styled.h5`

`

const Info = styled.div`
    display: flex;
    padding: 20px 0;
`

export default Main;