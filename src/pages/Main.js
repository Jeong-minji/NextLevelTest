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
            <Content>
                <ProfileImage />
                <UserName>Nickname</UserName>
                <HashTags>
                    <span>#User Tag1</span>
                    <span>#User Tag2</span>
                </HashTags>
                <Introduce>
                    안녕하세요! 웹툰 관련 소재들을 제작하고 있는 라떼고양이입니다!
                </Introduce>
            </Content>
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
`

const BtnLogout = styled.button`
    padding: 8px 25px;
    border-radius: 20px;
    border: 2px solid #88A9FF;
    color: #88A9FF;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid white;
    color: white;
`

const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
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

export default Main;