import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import eyeImage from '../../images/Shape.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        try {
            await axios.post('/auth/login', {
                email,
                password,
            });

            alert('Successfully logged in');
            // navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    let passwordVisibility = false;

    function togglePassword() {
        const passwordInput = document.querySelector('.password-input');
        const passwordIcon = document.getElementById('password-icon');

        passwordVisibility = !passwordVisibility;

        if (passwordVisibility) {
            passwordInput.type = 'text';
            passwordIcon.src = eyeImage;
        } else {
            passwordInput.type = 'password';
            passwordIcon.src = eyeImage;
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <div className="login-box">
                    <div className="white-box">
                        <div className="txt-logo">Logo</div>
                        <div className="txt-p">
                            Enter your credentials to access your account
                        </div>
                        <input
                            type="text"
                            className="user-id"
                            placeholder="User ID"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="password">
                            <input
                                type="password"
                                className="password-input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <img
                                src={eyeImage}
                                alt="hide-password"
                                id="password-icon"
                                className="pass-icon"
                                onClick={togglePassword}
                            />
                        </div>
                        <button className="sign-in">
                            <span className="txt-signin">Sign In</span>
                        </button>
                        <div className="txt-signup">
                            Don't have an account?{' '}
                            <span className="txt-signup2" to="/signup">
                                Sign Up
                            </span>
                        </div>
                    </div>
                </div>
                <div className="signup-navigator">
                    <span className="txt-p2">Don't have an account?</span>
                    <span className="txt-signup2" to="/signup">
                        Sign Up
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
