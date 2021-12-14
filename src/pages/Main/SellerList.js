import react, { useEffect } from "react";
import styled from "styled-components";
import SellerListItem from "./SellerListItem";

const SellerList = () => {
    // useEffect(() => {
    //     fetch('http://192.168.0.133:1338/v1/test/contents', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: ""
    //         }
    //     }).then(res => res.json())
    //     .then(res => console.log(res));
    // }, []);

    return (
        <SellerListWrapper>
            <SellerListItem />
            <SellerListItem />
            <SellerListItem />
        </SellerListWrapper>
    )
}

const SellerListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default SellerList;