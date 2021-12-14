import react from "react";
import styled from "styled-components";

import Chip from "../../components/Chip";

const Main = () => {
    return (
        <SellerIntroHeaderWrapper>
            <ProfileImage />
            <UserName>Nickname</UserName>
            <HashTags>
                <span>#User Tag1</span>
                <span>#User Tag2</span>
            </HashTags>
            <Introduce>
                안녕하세요! 웹툰 관련 소재들을 제작하고 있는 라떼고양이입니다!
            </Introduce>
            <Info>
                <Chip title="" content="pixel@pixel.sc" />
                <Chip title="찜" content="1.3K" />
                <Chip title="뷰" content="8.2K" />
                <Chip title="콘텐츠" content="13" />
            </Info>
        </SellerIntroHeaderWrapper>
    )
}

const SellerIntroHeaderWrapper = styled.div`
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