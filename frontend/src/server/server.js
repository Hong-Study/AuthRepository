import React, { useState } from "react";

export const logInRequest = async (email, password, history) => {
    try {
        const response = await fetch(
            "http://localhost:5000/api/user/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                    // "Accept": "*/*"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                credentials: 'include',
            });
        // Body에 accessToken, refreshToken이 담김
        const data = await response.json();
        if (response.status !== 200) {
            alert(data.description);
        }
        else {
            localStorage.setItem("accessToken", data.accessToken);
            document.cookie = `refreshToken=${data.refreshToken}`;
            alert("로그인이 완료되었습니다");
        }
        return response.status;
    } catch (error) {
        console.error("로그인 실패 ", error);
    }
};

export const registerRequest = async (email, password, userName, checksum) => {
    try {
        const response = await fetch("http://localhost:5000/api/user/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    userName: userName,
                    emailChecksum: checksum
                }),
            });
        console.log(response);
        
        if (response.status !== 200) {
            const data = await response.json();
            alert(data.description);
        }
        else
            alert("회원가입이 완료되었습니다");

        return response.status;
    }
    catch (error) {
        console.error("회원가입 실패 ", error);
    }
}

export const checksumRequest = async (email) => {
    try {
        const response = await fetch("http://localhost:5000/api/user/auth/send-email",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email
                }),
            });
        if (response.status !== 200) {
            const data = await response.json();
            alert(data.description);
        }
        else
            alert("인증번호가 이메일로 전송되었습니다");
    }
    catch (error) {
        console.error("checksum 요청 실패 ", error);
    }
}

export const forgetPasswordRequest = async (email) => {
    try {
        const response = await fetch("http://localhost:5000/api/user/auth/reset-password",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email
                }),
            });

        if (response.status !== 200) {
            const data = await response.json();
            alert(data.description);
        }
        else
            alert("초기화된 비밀번호가 이메일로 전송되었습니다.");
        return response.status;
    }
    catch (error) {
        console.error("checksum 요청 실패 ", error);
    }
}
// 서버 통신 로직
