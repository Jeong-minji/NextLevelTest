import react from "react";
import styled from "styled-components";

const SellerListItem = () => {
    return (
        <SellerListItemWrapper>
            <ItemImage />
            <ItemInfo>
                <Title>Content Title: Lorem ipsum dolor sit amnet, consectetur adispfing elit. Etiam vel.</Title>
                <Provider>
                    <ProfileImage />
                    <Nickname>Nickname</Nickname>
                </Provider>
                <Column>
                    <Points>40,000P</Points>
                    <Liked>1.2K뷰 205찜</Liked>
                </Column>
            </ItemInfo>
        </SellerListItemWrapper>
    )
}

const SellerListItemWrapper = styled.li`
    display: flex;
    width: 570px;
    height: 132px;
    margin: 10px 0;
    color: white;
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
`

const ItemImage = styled.img`
    width: 260px;
    height: 100%;
`

const ItemInfo = styled.div`
    padding: 15px;
`

const Title = styled.h5`
    line-height: 1.2em;
`

const Provider = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`

const ProfileImage = styled.img`
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 18px;
    height: 18px;
    border-radius: 50%;
`

const Nickname = styled.span`
    margin-left: 6px;
`

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Points = styled.span`
    font-size: 17px;
`

const Liked = styled.span`
font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
`

export default SellerListItem;