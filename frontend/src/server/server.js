import axios from "axios";

const userServerAddr = "http://localhost:4000";
export const logInRequest = async (email, password, history) => {
    axios
        .post(
            userServerAddr + "/api/user/auth/login",
            new URLSearchParams({
                email: email,
                password: password,
            })
        )
        .then((response) => {
            // Body에 accessToken, refreshToken이 담김
            const data = response.body.json();
            if (response.status !== 200) {
                alert(data.description);
            } else {
                localStorage.setItem("accessToken", data.accessToken);
                document.cookie = `refreshToken=${data.refreshToken}`;
                alert("로그인이 완료되었습니다");
            }
            return response.status;
        })
        .catch((error) => {
            console.error("데이터를 받아오는 데 실패했습니다:", error);
        });
};

export const registerRequest = async (email, password, userName, checksum) => {
    axios
        .post(userServerAddr + "/api/user/auth/register")
        .body({
            email: email,
            password: password,
            userName: userName,
            checksum: checksum,
        })
        .then((response) => {
            console.log(response);

            if (response.status !== 200) {
                const data = response.json();
                alert(data.description);
            } else alert("회원가입이 완료되었습니다");

            return response.status;
        })
        .catch((error) => {
            console.error("데이터를 받아오는 데 실패했습니다:", error);
        });
};

export const checksumRequest = async (email) => {
    axios
        .post(
            userServerAddr + "/api/user/auth/send-email",
            new URLSearchParams({
                email: email,
            })
        )
        .then((response) => {
            if (response.status !== 200) {
                const data = response.json();
                alert(data.description);
            } else alert("인증번호가 이메일로 전송되었습니다");
        })
        .catch((error) => {
            console.error("데이터를 받아오는 데 실패했습니다:", error);
        });
};

export const forgetPasswordRequest = async (email) => {
    axios
        .post(userServerAddr + "/api/user/auth/reset-password")
        .body({
            email: email,
        })
        .then((response) => {
            if (response.status !== 200) {
                const data = response.json();
                alert(data.description);
            } else alert("초기화된 비밀번호가 이메일로 전송되었습니다.");
            return response.status;
        })
        .catch((error) => {
            console.error("데이터를 받아오는 데 실패했습니다:", error);
        });
};
// 서버 통신 로직
