import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {Link} from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import './SignUp.css';

export default function SignUp() {
    // const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();
    
    const [signUpDetails, setSignUpDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSignUp = async (data) => {
        try {
            await axios.post("/api/auth/signup", data); // Replace with your API endpoint for signup
            alert("Account Created Successfully");
            // navigate("/");
        } catch (error) {
            alert("Email already exists");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className='login-box'>
                    <div className='white-box'>
                        <div className="txt-logo">Logo</div>
                        <div className="txt-p">Create New Account</div>
                        <input
                            type="text"
                            className='user-id'
                            placeholder="Mail ID"
                            aria-label="Email"
                            {...register("email", {
                                required: "Please Enter Your Email!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please Enter a Valid Email!",
                                },
                            })}
                            onChange={(e) =>
                                setSignUpDetails({ ...signUpDetails, email: e.target.value })
                            }
                            value={signUpDetails.email}
                        />
                        {errors.email && <span className="error">{errors.email.message}</span>}
                        <input
                            type="password"
                            className='password'
                            placeholder='Password'
                            {...register("password", {
                                required: "Please Enter Your Password!",
                                minLength: {
                                    value: 8,
                                    message: "Password should be at least 8 characters long!",
                                },
                            })}
                        />
                        {errors.password && <span className="error">{errors.password.message}</span>}
                        <input
                            type="password"
                            className='user-id'
                            placeholder="Confirm Password"
                            aria-label="Password"
                            {...register("confirmPassword", {
                                required: "Please Confirm Your Password!",
                                validate: (value) =>
                                    value === getValues("password") || "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className="error">{errors.confirmPassword.message}</span>
                        )}
                        <button className='sign-up'><span className='txt-signup'>Sign Up</span></button>
                    </div>
                </div>
                <div className='signin-navigator'>
                    <span className="txt-signin2">Sign In</span>
                </div>
            </form>
        </div>
    );
}




