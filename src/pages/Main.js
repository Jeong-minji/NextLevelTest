import react from "react";
import styled from "styled-components";

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
    border: 1px solid white;
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
    color: white;
`

const BtnLogout = styled.button`

`

export default Main;