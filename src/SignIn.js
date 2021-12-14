import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = () => {
    const [ userId, setUserId ] = useState("");
    const [ userPw, setUserPw ] = useState("");
    const [ isAllowed, setIsAllowed ] = useState(false);

    const handleUserId = (e) => {
        setUserId(e.target.value)
    }

    const handleUserPw = (e) => {
        setUserPw(e.target.value);
    }

    const setCookie = (name, value, exp) => {
        var date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    const handleBtnLogin = () => {
        fetch('http://192.168.0.133:1338/v1/test/auth/local', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: userId,
                password: userPw
            })
        }).then(res => res.json())
        .then(res => {
            if(res.statusCode === 400) {
                alert("잘못된 아이디/비밀번호 입니다.")
            } else {
                setCookie("token", "true", 7);
                setIsAllowed(true);
            }
        });
    }

    return (
        <Wrapper>
            <Logo src="/images/typo_logo.png" />
            <MainTitle>로그인</MainTitle>
            <InputBox>
                <InputTitle>ID</InputTitle>
                <UserInput onChange={handleUserId} placeholder="아이디를 입력해주세요. (email)" />
            </InputBox>
            <InputBox>
                <InputTitle>Password</InputTitle>
                <UserInput onChange={handleUserPw} placeholder="비밀번호를 입력해주세요." />
            </InputBox>
            <Link to={isAllowed ? "/" : "#"}><BtnLogin onClick={handleBtnLogin}>로그인</BtnLogin></Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #1C1C1C;
`

const Logo = styled.img`
    width: 150px;
`

const MainTitle = styled.h3`
    color: white;
`

const InputBox = styled.div`
    margin: 15px 0;
`

const InputTitle = styled.span`
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
`

const UserInput = styled.input`
    width: 300px;
    padding: 15px 10px;
    background: rgba(255, 255, 255, 0.1);
`

const BtnLogin = styled.button`
    margin-top: 20px;
    padding: 10px 140px;
    border-radius: 10px;
    color: white;
    background-color: #6179FF;
    cursor: pointer;
`

export default SignIn;