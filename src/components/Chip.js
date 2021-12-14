import react from "react";
import styled from "styled-components";

const Chip = ({title, content}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Content valueLength={title.length}>{content}</Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 5px;
    padding: 6px 12px 8px 12px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(0, 0, 0, 0.1);
`

const Title = styled.span`
    color: rgba(255, 255, 255, 0.5);
`

const Content = styled.span`
    margin-left: ${({valueLength}) => valueLength > 0 ? "8px" : "0"};
    color: white;
`

export default Chip;