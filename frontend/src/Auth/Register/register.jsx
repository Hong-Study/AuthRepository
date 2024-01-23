import React, { useState } from "react";
import styled from "styled-components";
import "../auth.css";
import backImg from "../img/backImg.webp";
import { registerRequest } from "../../server/server";
import { checksumRequest } from "../../server/server";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(${backImg});
    background-size: cover;
`;

const FormContainer = styled.div`
    width: 30%;
    height: 60%;
    padding: 32px;
    border-radius: px;
    background-color: #313338;
    color: white;
`;

const Content = styled.form`
    height: 80%;
    margin-top: 50px;
    margin-right: 50px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checksum, setChecksum] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleChecksumChange = (e) => {
        setChecksum(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        // 여기서 logInRequest 함수를 호출
        registerRequest(email, password, name, checksum);
    };

    const handleChecksum = (e) => {
        e.preventDefault();

        // 여기서 logInRequest 함수를 호출
        checksumRequest(email);
    }

    return (
        <Wrapper>
            <FormContainer>
                <Content onSubmit={handleRegister} onClick={handleChecksum}>
                    <label name="email">
                        이메일 또는 전화번호
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            name="userId"
                            required
                        ></input>
                    </label>
                    <button id="emailChecksum" type="button">
                        이메일 인증 번호 전송
                    </button>
                    <label name="checksum">
                        이메일 인증 번호
                        <input
                            type="text"
                            value={checksum}
                            onChange={handleChecksumChange}
                            name="checksum"
                            required
                        ></input>
                    </label>
                    <label name="userPw">
                        비밀번호
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            name="userPw"
                            required
                        ></input>
                    </label>
                    <label name="name">
                        유저 이름
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            name="name"
                            required
                        ></input>
                    </label>

                    <button id="submit" type="submit">
                        회원가입
                    </button>

                </Content>
            </FormContainer>
        </Wrapper>
    );
};

export default Register;
