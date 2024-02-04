import LogIn from "./Auth/LogIn/logIn";
import Register from "./Auth/Register/register";
import ForgetPassowrd from "./Auth/ForgetPassword/forgetPassword";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LogIn />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/forget-password" element={<ForgetPassowrd />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
}

export default App;
