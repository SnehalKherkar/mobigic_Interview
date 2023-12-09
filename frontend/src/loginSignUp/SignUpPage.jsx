import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./signUp.css"

const SignUpPage = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/signup", values)
            .then(res => console.log("Register Successfully"))
            .catch(err => console.log(err));

        navigate("/login");
    };

    return (
        <>
            <div className="Main_container">
                <form className="signUp_form" onSubmit={handleSubmit}>
                    <h1 className='heading'>MOBIGIC</h1>
                    <p className="heading">Sign Up</p>
                    <div className="inputGroup">
                        <label className="label" htmlFor="username">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder='Enter your Username'
                            name="name"
                            className="input"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label className="label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            placeholder='Enter your Email'
                            id="email"
                            name="email"
                            className="input"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label className="label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Enter your Password'
                            className="input"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="button">
                        Sign Up
                    </button>
                    <p>Already have an account please <span onClick={() => navigate("/login")} className='signUp_link' >Login</span></p>
                </form>
            </div>
        </>
    );
};

export default SignUpPage;
