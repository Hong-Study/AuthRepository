import LogIn from "./Auth/LogIn/logIn";
import Register from "./Auth/Register/register";
import ForgetPassowrd from "./Auth/ForgetPassword/forgetPassword";
import { Routes, Route } from "react-router-dom";
import { Main } from "./main/main";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/forget-password" element={<ForgetPassowrd />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/main" element={<Main />}></Route>
        </Routes>
    );
}

export default App;
