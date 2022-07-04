import './login.css';
import { useState, useEffect } from 'react';
import { UserContext } from './useUsercontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const { username, password, user, message, isLoggedIn, setUsername, setPassword, setMessage, setIsLoggedIn } = useContext(UserContext);
    const Link = useNavigate();
    const handelLogout = (e) => {
        e.preventDefault();
        setIsLoggedIn(false);
        setMessage('');
    }
    useEffect(() => {
        if (isLoggedIn) {
            alert('you are logged in');
        }
        else {
            alert('you are logged out');
        }
    }
        , [isLoggedIn]);
    const goHome = () => {
        Link.push('/home');
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        if (username === user.username && password === user.password) {
            alert('Login Success');
            setIsLoggedIn(true);
            setMessage('you are Login Success');
        } else {
            alert('Login Failed');
        }
    }
    return (
        <>
            {isLoggedIn ? { goHome } :

                <>

                    <h1>Login</h1>
                    <form className="input" onSubmit={handelSubmit}>

                        <label>username</label>

                        <input type="text" name="username" onChange={(e) => (setUsername(e.target.value))} value={username} /> {/* name="username" is the name of the input */}

                        <label >password</label>

                        <input type="password" name="Password" onChange={(e) => (setPassword(e.target.value))} value={password} /> {/* name="Password" is the name of the input */}
                        <input type="submit" value="Login" className="btn-login" /> {/* value="Login" is the value of the button */}

                    </form>
                </>

            }

        </>

    );
}

export default Login;
