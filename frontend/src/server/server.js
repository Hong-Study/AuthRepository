import React, { useState } from "react";

export const logInRequest = async (email, password) => {
    try {
        const response = await fetch(
            "http://192.168.35.175:5000/api/user/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }
        );
        console.log(response);

        //response 해더에서 refresh 토큰은 쿠키에 저장하고 access 토큰은 로컬스토리지로
    } catch (error) {
        console.error("로그인 실패 ", error);
    }
};

// 서버 통신 로직
