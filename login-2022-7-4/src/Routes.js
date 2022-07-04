import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Home from "./Home";
import Login from "./Login";
import isLogin from "./isLogin";
import { UserContext } from "./useUsercontext";
export default function Approutes() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user] = useState({ username: 'abood', password: '123456' });
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <UserContext.Provider value={{ username, password, user, message, isLoggedIn, setUsername, setPassword, setMessage, setIsLoggedIn }}>
                <Routes>

                    <Route path="/" element={<App />} /> {/* element is the component that will be rendered */}
                    <Route path="/home" element={<Home />} /> {/* <Home /> is the component that will be rendered */}
                    <Route path="/login" element={<Login />} /> {/* <Login /> is the component that will be rendered */}
                </Routes>
            </UserContext.Provider>
        </Router>
    );
}