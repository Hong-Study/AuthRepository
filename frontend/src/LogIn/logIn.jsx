import React from "react";
import styled from "styled-components";
import "./logIn.css";
import backImg from "../img/backImg.webp";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${backImg});
    background-size: cover;
`;

const FormContainer = styled.div`
    width: 50%;
    height: 40%;
    padding: 32px;
    border-radius: 8px;
    background-color: #313338;
    color: white;
`;

const Content = styled.form`
    height: 70%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const LogIn = () => {
    return (
        <Wrapper>
            <FormContainer>
                <h1 style={{ margin: "0px" }}>돌아오신 것을 환영해요!</h1>
                <span>다시 만나니까 너무 반가워요!</span>

                <Content>
                    <label name="userId">
                        이메일 또는 전화번호
                        <input type="text" name="userId" required></input>
                    </label>
                    <label name="userPw">
                        비밀번호
                        <input type="text" name="userPw" required></input>
                    </label>

                    <button id="submit">로그인</button>
                </Content>
            </FormContainer>
        </Wrapper>
    );
};

export default LogIn;
